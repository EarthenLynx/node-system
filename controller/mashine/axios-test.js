const axios = require("axios"); 

const baseUrl = "https://system-status-one.herokuapp.com/"; 
const mashineRoute = "mashine/one"

axios.get(baseUrl + mashineRoute, {
    headers: {
        "Authorization": "aGV0dGljaHVzZXI6d2VsY29tZTAx"
    }
}).then(response => console.log(response.data))
.catch(err => console.log(err.response.data));