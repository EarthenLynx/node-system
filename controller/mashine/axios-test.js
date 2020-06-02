const axios = require("axios"); 

const baseUrl = "localhost:3000/"; 
const mashineRoute = "mashine/one"

axios.get(baseUrl + mashineRoute, {
    headers: {
        "Authorization": "aGV0dGljaHVzZXI6d2VsY29tZTAx"
    }
}).then(response => console.log(response))
.catch(err => console.log(err));