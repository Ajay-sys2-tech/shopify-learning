import getCharities from "./getCharities.js";
import addCharity from "./addCharity.js"
import charityExist from "./charityExist.js";
import updateCharity from "./updateCharity.js";
import deleteCharity from "./deleteCharity.js";


// getCharities("charities").then((res) => {
//     const data = res.data.metaobjects.nodes;
//     data.forEach(d => {
//         console.log(d)
//     });
// }).catch(err => {
//     console.log(err);
// })


// charityExist("charities", "abc").then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })


// addCharity().then((res) => {
//     if(res.data != null){
//         const fields = res.data.metaobjectCreate.metaobject.fields;
//         fields.forEach(f => {
//             console.log(f)
//         });
//     }
//     else console.log(res);
// }).catch(err => {
//     console.log(err);
// })




// updateCharity("gid://shopify/Metaobject/50867765565").then((res) => {
//     console.log(res.data.metaobjectUpdate.metaobject);
// }).catch(err => {
//     console.log(err);
// })



deleteCharity("gid://shopify/Metaobject/50867765565").then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})


