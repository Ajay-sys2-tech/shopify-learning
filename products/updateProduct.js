import {url, options} from '../config.js';

const updateProduct = async (id) => {
    const query = `
    mutation {
        productUpdate(input: {
            id: "${id}", 
            title: "Node Product updated by Ajay",
        }) 
        {
          product {
            id
          }
        }
      }`;

        options.body = JSON.stringify({query});

        const request = new Request(url, options);

        const res = await fetch(request);

        return res.json();
};

export default updateProduct;