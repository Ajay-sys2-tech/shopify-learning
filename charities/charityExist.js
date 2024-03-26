import {url, options} from '../config.js';

const charityExist = async (type, slug) => {
    const query = `
        query{
            metaobjects(type: "${type}", first: 250) {
                nodes{
                    field(key: "slug"){
                        value
                }
                }
            }
        }
    `;

    //   console.log(query);

    options.body = JSON.stringify({query});
    const request = new Request(url, options);
    const res = await fetch(request);
    const jsonRes = await res.json();

    const data = jsonRes.data.metaobjects.nodes;
    for(let i=0;i<data.length;i++){
        if(data[i].field.value == slug)return true;
    }


    return false;
}

export default charityExist;