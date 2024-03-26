import getProducts  from './getProducts.js';
import addProduct from './addProduct.js';
import updateProduct from './updateProduct.js';
import deleteProduct from './deleteProduct.js';
import getProductById from './getProductById.js';


// getProducts().then((res) => {
//         console.log(res.data.products.edges);
//     });
    

// addProduct().then((res) => {
//     console.log(res.data.productCreate.product);
// });


// updateProduct('gid://shopify/Product/9172315996477').then((res) => {
//         console.log(res); 
//     }).catch(err => {
//         console.log(err);
//     });

// deleteProduct("gid://shopify/Product/9172324254013").then((res) => {
//     console.log(res);
//     }).catch(err => {
//         console.log(err);
// });


getProductById('gid://shopify/Product/9170332418365').then((res) => {
        console.log(res.data.product); 
    }).catch(err => {
        console.log(err);
    });


