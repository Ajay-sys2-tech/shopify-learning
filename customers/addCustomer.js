import {url, options} from '../config.js';

const addCustomer = async () => {
const variables = {
        "input": {
          "email": "peter.yadav@gmail.com",
          "phone": "+16464535555",
          "firstName": "Peter",
          "lastName": "Yadav",
        //   "acceptsMarketing": true,
          "addresses": [
            {
              "address1": "412 fake st",
              "city": "Ottawa",
              "province": "ON",
              "phone": "+16469999999",
              "zip": "A1A 4A1",
              "lastName": "Lastname",
              "firstName": "Steve",
              "country": "CA"
            }
          ]
        }
    }
    const query = `
    mutation customerCreate($input: CustomerInput!) {
        customerCreate(input: $input) {
          userErrors {
            field
            message
          }
          customer {
            id
            email
            phone
            
            firstName
            lastName
            
            addresses {
              address1
              city
              country
              phone
              zip
            }
          }
        }
      }
    `;

    options.body = JSON.stringify({query, variables});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default addCustomer;