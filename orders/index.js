import getOrders from "./getOrders.js";
import getOrderById from "./getOrderById.js";

// getOrders().then((res) => {
//         console.log(res.data.orders.edges);
//     }).catch(err => {
//         console.log(err);
//     })


    getOrderById("gid://shopify/Order/5810644025661").then((res) => {
        console.log(res.data.order);
    }).catch(err => {
        console.log(err);
    })
    