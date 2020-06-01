// Import needed modules
const express = require("express");
const getSystem = require("../../controller/system/getsystem");
const getProcess = require("../../controller/system/getprocess");

// Setup the router
var router = express.Router();

// Get the list of recipes when calling the api with a get request.
router.get("/", function (req, res, next) {
  getSystem(req, res); 
});

router.get("/process", (req, res, next) => {
  getProcess(req, res); 
});

// When receiving the post request, save the file in the temp folder
// router.post("/upload", (req, res, next) => {
//   uploadFile(req, res, next); 
// });


module.exports = router;
