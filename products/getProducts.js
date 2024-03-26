import {url, options} from '../config.js';

const getProducts = async () => {
    // const query =  `query {
    //     products(first: 5, reverse: true) {
    //     edges {
    //         node {
    //         id
    //         title
    //         }
    //     }
    //     }
    // }`;

    const query = `query { 
        products(first: 7) { 
            edges { 
                node { 
                    id 
                    title 
                    handle 
                    resourcePublicationOnCurrentPublication { 
                        publication { 
                            name id 
                        } 
                        publishDate 
                        isPublished 
                    } 
                } 
            } 
        } 
    }`;
    options.body = JSON.stringify({query});

    

    const request = new Request(url, options);

    const res = await fetch(request);
    const data = await res.json();
    // console.log(res.data);
    return data;

    // fetch(request)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log('Data:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

}


export default getProducts;
// shopify();