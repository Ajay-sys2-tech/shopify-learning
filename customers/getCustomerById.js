import {url, options} from '../config.js';

const getCustomerById = async (id) => {
    const query = `
    query {
        customer(id:"${id}") {
            firstName
            tags
        }
      }`;

    options.body = JSON.stringify({query});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default getCustomerById;