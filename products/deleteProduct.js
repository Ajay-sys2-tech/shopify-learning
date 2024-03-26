import {url, options} from '../config.js';

const deleteProduct = async (id) => {
    const query = `
    mutation {
        productDelete(input: {
            id: "${id}"
        }) 
        {
          deletedProductId
        }
      }`;

      console.log(query);

        options.body = JSON.stringify({query});

        const request = new Request(url, options);

        const res = await fetch(request);

        return res.json();
};

export default deleteProduct;