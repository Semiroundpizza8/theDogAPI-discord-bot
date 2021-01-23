const querystring = require("querystring");
const axios = require("axios");

const dogAPI = {
  /**
   * Makes a request to theDogAPI.com for a random dog image with breed info attached.
   */
  getDog: async function (sub_id, DOG_API_URL, DOG_API_KEY) {
    // Initialize object with query settings
    var query_params = {
      has_breeds: true,
      mime_types: "jpg,png",
      size: "small",
      sub_id: sub_id,
      limit: 1,
    };

    try {
      // construct the API Get request url
      
      const query = querystring.stringify(query_params);
      // "?has_breeds=true&mime_types=jpeg%20png....."
      
      const url = `${DOG_API_URL}v1/images/search?${query}`

      // make the request to the actual API
      let response = await axios.get(
        url,
        {
          header: {
            "X-API-KEY": DOG_API_KEY
          }
        }
      )
      
      return response.data
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = dogAPI;
