import {url, options} from '../config.js';

const getCharities = async (type) => {
    const query = `
    query{
        metaobjects(type: "${type}", first: 5) {
            nodes{
                id
                handle
                field(key: "name"){
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

    return res.json();
}

export default getCharities;