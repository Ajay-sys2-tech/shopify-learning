import {url, options} from '../config.js';

const getOrderById = async (id) => {
    const query = `
    query {
        order(id: "${id}") {
          name
          originalTotalPriceSet{shopMoney{amount}}
          customer{firstName}
        }
      }
    `;

    options.body = JSON.stringify({query});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default getOrderById;