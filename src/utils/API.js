import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=20&nat=us";

export default {
    search: function() {
      return axios.get(APIURL);
    }
  };