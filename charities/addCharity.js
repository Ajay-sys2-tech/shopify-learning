import {url, options} from '../config.js';
import charityExist from './charityExist.js';

const addCharity = async () => {

    
  const fields = [
    {
      "key": "name",
      "value": "Save the Old"
    },
    {
      "key": "slug",
      "value": "sto"
    },
    {
      "key": "short_code",
      "value": "sto"
    },
    {
      "key": "beneficiary",
      "value": "elderly people"
    },
    {
      "key": "benefit_text",
      "value": "essential supplies"
    },
    {
      "key": "benefit_unit",
      "value": "0.3"
    },
    {
      "key": "cost",
      "value": "5"
    },
    {
      "key": "denominator",
      "value": "30"
    },
    {
      "key": "share_percentage",
      "value": "25"
    },
    {
      "key": "image",
      "value": "https://oldpeople.com/234.jpg"
    },
    {
      "key": "site_default",
      "value": "0"
    },
    {
      "key": "benefit_logo",
      "value": "https://oldpeople.com/234.jpg"
    },
    {
      "key": "cause_header_logo",
      "value": ""
    },
    {
      "key": "hide_benefit",
      "value": "0"
    },
    {
      "key": "active",
      "value": "1"
    },
    {
      "key": "category",
      "value": "Social Equality"
    }

  ]

  if(! charityExist("charities", fields[1].value) ) {
      
    const metaobject = {
      "type": "charities",
      "fields": fields
    }

    const variables = {
      "metaobject": metaobject
    }

    const query = `
      mutation metaobjectCreate($metaobject: MetaobjectCreateInput!) {
        metaobjectCreate(metaobject: $metaobject) {
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

      options.body = JSON.stringify({query, variables});
      const request = new Request(url, options);
      const res = await fetch(request);
      return res.json();
  }

  else return "Charity already exists!";

}

export default addCharity;


