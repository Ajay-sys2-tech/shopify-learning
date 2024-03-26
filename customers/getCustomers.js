import {url, options} from '../config.js';

const getCustomers = async () => {
    const query = `
    query {
        customers(first: 10) {
          edges {
            node {
              id,
              firstName,
              lastName,
            }
          }
        }
      }`;

    options.body = JSON.stringify({query});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default getCustomers;