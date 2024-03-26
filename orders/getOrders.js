import {url, options} from '../config.js';

const getOrders = async () => {
    const query = `
      query {
        orders(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    `;

    options.body = JSON.stringify({query});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default getOrders;