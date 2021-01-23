const querystring = require("querystring");
const axios = require("axios");

/**
 * Makes a request to theDogAPI.com for a random dog image with breed info attached.
 */
async function getDogImage(sub_id) {
  var query_params = {
    has_breeds: true,
    mime_types: "jpg,png",
    size: "small",
    sub_id: sub_id,
    limit: 1
  };

  // convert this object to query string
  let queryString = querystring.stringify(query_params);

  try {

    // construct the API Get request url
    let _url = process.env.DOG_API_URL + `v1/images/search?${queryString}`;

    // make the request passing the url, and headers object which contains the API_KEY
    const response = await axios.get(_url, {
      headers: {
        "X-API-KEY": process.env.DOG_API_KEY,
      },
    });

    return response.data[0];

} catch (e) {
    console.log(e);
  }
}

module.exports = {
  getDogImage,
};
