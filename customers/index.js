import getCustomers from "./getCustomers.js";
import getCustomerByCountry from "./getCustomerByCountry.js"
import addCustomer from "./addCustomer.js";
import deleteCustomer from "./deleteCustomer.js";
import getCustomerById from "./getCustomerById.js";
import updateCustomerTag from "./updateCustomerTag.js"


// getCustomers().then((res) => {
//     console.log(res.data.customers.edges);
// }).catch(err => {
//     console.log(err);
// })



// getCustomerByCountry("canada").then((res) => {
//     console.log(res.data.customers.edges);
// }).catch(err => {
//     console.log(err);
// })


getCustomerById("gid://shopify/Customer/7915470979389").then((res) => {
    console.log(res.data.customer);
}).catch(err => {
    console.log(err);
})



// updateCustomerTag("gid://shopify/Customer/7915470979389", "tag-1", "newTag-1").then((res) => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(err);
// })


// peter parker id "gid://shopify/Customer/7915470979389"

// addCustomer().then((res) => {
//         console.log(res.data.customerCreate.customer);
//     }).catch(err => {
//         console.log(err);
//     })


    // deleteCustomer('gid://shopify/Customer/7915490705725').then((res) => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })
    