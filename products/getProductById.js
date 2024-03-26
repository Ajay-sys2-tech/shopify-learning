
import {url, options} from '../config.js';

const getProductById = async (id) => {
    

    const query = `query { 
        product: product(id: "${id}") { 
                id 
                title 
                metafield(key: "custom.meta_2") { value}
        } 
    }`;

    // console.log(query);
    options.body = JSON.stringify({query});

    const request = new Request(url, options);
    
        const res = await fetch(request);
        const data = await res.json();
        // console.log(data);
        return data;

}


export default getProductById;
