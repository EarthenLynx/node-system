# Test your API skills
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faltametrics.com%2Fassets%2Fimages%2Fdevelopers%2Fapi-library-banner-670x200.png&f=1&nofb=1)

This app contains several routes you can target that return mocked mashine data. You can find an example of the json - structure they return below this description. 

Each of the routes is protected by [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), means you will need to set the headers of your request before fetching data. 

> Basic authentication is the simplest technique for enforcing access controls, because [...] HTTP Basic authentication uses standard fields in the http - header

## Requirements

In case you are unfamiliar with Javascript and / or JSON, you can find a few links below to get you started. Knowing of Javascript is not mandatory, but will definitely make things easier on the long run. Having a basic understanding of http and JSON is, however, needed to comeplete the tasks below. 

> [Javascript for cats](http://jsforcats.com/) is a good tutorial to get started with the basics. For a more structured approach to the syntax, you might as well try [W3School's JS course](https://www.w3schools.com/js/) and the [JSON Intro](https://www.w3schools.com/js/js_json_intro.asp)

---

## Tasks to do

1. Use [Postman](https://www.postman.com/) to connect to all three API endpoints shown below ( without authentication )

> If you are unfamiliar with Postman, [you can find a very good series on Youtube here](https://www.youtube.com/watch?v=juldrxDrSH0&list=PLhW3qG5bs-L-oT0GenwPLcJAPD_SiFK3C) that takes you from installation until mastering the app.

2. Note the status you receive. Google it and find out what it means

> You can see the status in your Postman User Interface.

3. Then, use Postman again, this time with the authorization header set

> In Postman, you can put basic authentication in use either with the 'Authorization' or with the 'Headers' tab, right below the input for the URL. As the SAP Gateway only supports data access with the Headers - option, I encourage you to try that.

4. When you have succeeded receiving a response into your Postman app, you can find a small button on the very right side ( where the tabs for 'Authorization' and and 'Headers' are located ). Copy this code into your Code editor and try to bring the response into the console ( you can also find a code example below ).
5. [Optional] Use the Node Express - module to create a web server that has one route. When hitting that route, the following business logic executes: 
   1. The server sends three http - requests ( to the three mashine routes ) to the Heroku application, using a client like jquery or axios. ( either one after the other or asynchronously)
   2. Then, the three responses will be concatenated into a single array of objects, containing the three mashines.
   3. This object will then be sent back to the client

---

## API Routes for mashine data

**Mashine 1**
```sh
$ GET [THIS_APP_DOMAIN].herokuapp.com/mashine/one
```

**Mashine 2**
```sh
$ GET [THIS_APP_DOMAIN].herokuapp.com/mashine/two
```

**Mashine 3**
```sh
$ GET [THIS_APP_DOMAIN].herokuapp.com/mashine/three
```

## Example code to send an http - request with node.js to mashine 1

```javascript
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': '[THIS_APP_DOMAIN]',
  'port': 3000,
  'path': '/mashine/one',
  'headers': {
    'Authorization': '[MY_BASE_64_ENCODED_STRING]'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
```

## Example response from Mashine 1

```json
{
  "name": "Mashine 1",
  "adress": "192.168.2.101",
  "produces": "Hinges",
  "qtyToday": 14940,
  "qtyWeek": 104598,
  "status": "Ok",
  "statusMsg": "Mashine Mashine 1 is up and running.",
  "lastAct": "2020-06-01T16:42:00.330Z"
}
```

## Example response for the custom API built in step 5

```json
[
  {
    "name": "Mashine 1",
    "adress": "192.168.2.101",
    "produces": "Hinges",
    "qtyToday": 14940,
    "qtyWeek": 104598,
    "status": "Ok",
    "statusMsg": "Mashine Mashine 1 is up and running.",
    "lastAct": "2020-06-01T16:42:00.330Z"
  },   
  {
    "name": "Mashine 2",
    "adress": "192.168.2.102",
    "produces": "Hinges",
    "qtyToday": 5220,
    "qtyWeek": 86598,
    "status": "Ok",
    "statusMsg": "Mashine Mashine 2 is up and running.",
    "lastAct": "2020-06-01T16:42:00.330Z"
  },   
  {
    "name": "Mashine 1",
    "adress": "192.168.2.101",
    "produces": "Hinges",
    "qtyToday": 940,
    "qtyWeek": 4023,
    "status": "Ok",
    "statusMsg": "Mashine Mashine 3 is up and running.",
    "lastAct": "2020-06-01T16:42:00.330Z"
  }
]

```