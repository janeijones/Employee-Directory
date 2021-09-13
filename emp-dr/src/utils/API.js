import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=20&nat=us";

export default { //export an object with a search method that searches the random user api for the passed query
    search: function() {
        return axios.get(APIURL);
    }
};