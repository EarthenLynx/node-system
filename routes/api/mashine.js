// Import needed modules
const express = require("express");
const getMashineOne = require("../../controller/mashine/getMashineOne");
const getMashineTwo = require("../../controller/mashine/getMashineTwo");
const getMashineThree = require("../../controller/mashine/getMashineThree");

// Setup the router
const router = express.Router();

// Get the list of recipes when calling the api with a get request.
router.get("/one", function (req, res, next) {
  getMashineOne(req, res); 
});

router.get("/two", (req, res, next) => {
  getMashineTwo(req, res); 
}); 

router.get("/three", (req, res, next) => {
  getMashineThree(req, res); 
})

module.exports = router;