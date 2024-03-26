import {url, options} from '../config.js';

const updateCharity = async (id) => {
    const query = `
        mutation metaobjectUpdate($id: ID!, $metaobject: MetaobjectUpdateInput!) {
            metaobjectUpdate(id: $id, metaobject: $metaobject) {
            metaobject {
                fields {
                    key value
                }
            }
            userErrors {
                field
                message
            }
            }
        }
    `;

    const variables = {
        "id": id,
        "metaobject": {
          "fields": [
            {
                "key": "name",
                "value": "Save the Soil"
              },
              {
                "key": "slug",
                "value": "sts"
              },
              {
                "key": "short_code",
                "value": "sts"
              },
          ],
        }
      }

    //   console.log(query);

    options.body = JSON.stringify({query, variables});

    const request = new Request(url, options);

    const res = await fetch(request);

    return res.json();
}

export default updateCharity;