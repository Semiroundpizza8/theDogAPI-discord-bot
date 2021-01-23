const dogAPI = {
  /**
   * Makes a request to theDogAPI.com for a random dog image with breed info attached.
   */
  getDog: async function (/* */) {
    var query_params = {
      has_breeds: true,
      mime_types: "jpg,png",
      size: "small",
      sub_id: sub_id,
      limit: 1,
    };

    // convert this object to query string

    try {

      // construct the API Get request url

      // make the request to the actual API
      
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = dogAPI;
