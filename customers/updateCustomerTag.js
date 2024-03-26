import {url, options} from '../config.js';
import getCustomerById from './getCustomerById.js';

const updateCustomerTag = async (customerId, tagToRemove, tagToAdd) => {

    const getCustomer = await getCustomerById(customerId);
    const tagsList = getCustomer.data.customer.tags;
   
    console.log(tagsList);

    var index = tagsList.indexOf(tagToRemove);
    console.log(index);
    
    if (index != -1) {
        tagsList[index] = tagToAdd;
    }
    console.log(tagsList);

    const variables = {
      "input": {
        "id": customerId,
        "tags": tagsList
      }
    }
    

    
    const query = `
    mutation customerUpdate($input: CustomerInput!) {
      customerUpdate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
          firstName
          lastName
          tags
        }
      }
    }`;

    options.body = JSON.stringify({query, variables});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default updateCustomerTag;