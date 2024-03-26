import {url, options} from '../config.js';

const getCustomerByCountry = async (country) => {
    const query = `
    query {
        customers(first: 5, query: "country:${country}") {
          edges {
            node {
              id,
              firstName
            }
          }
        }
      }`;

    options.body = JSON.stringify({query});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default getCustomerByCountry;