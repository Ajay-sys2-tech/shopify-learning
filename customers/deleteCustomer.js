import {url, options} from '../config.js';

const deleteCustomer = async (id) => {
    const variables = {
        "id": id
      };
      
    const query = `
    mutation customerDelete($id: ID!) {
        customerDelete(input: {id: $id}) {
          shop {
            id
          }
          userErrors {
            field
            message
          }
          deletedCustomerId
        }
      }`;

      console.log({query, variables});

        options.body = JSON.stringify({query, variables});

        const request = new Request(url, options);

        const res = await fetch(request);

        return res.json();
};

export default deleteCustomer;