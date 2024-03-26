import {url, options} from '../config.js';

const deleteCharity = async (id) => {
    const query = `
        mutation metaobjectDelete($id: ID!) {
            metaobjectDelete(id: $id) {
            deletedId
            userErrors {
                field
                message
            }
            }
        }
    `;

    const variables = {
        "id": id
      }

    options.body = JSON.stringify({query, variables});
    const request = new Request(url, options);
    const res = await fetch(request);
    return res.json();
}

export default deleteCharity;