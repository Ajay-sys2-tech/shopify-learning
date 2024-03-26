import {url, options} from '../config.js';

const addProduct = async () => {
    const query = `
        mutation { 
            productCreate(input: {
                title: "Node Product 1",  
                vendor: "100 ka 2"
            }) 
            { 
                product { id } 
            } 
        }`;

        options.body = JSON.stringify({query});

        const request = new Request(url, options);

        const res = await fetch(request);

        return res.json();
};

export default addProduct;