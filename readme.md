<!-- body {font-family: 'Roboto', sans-serif;}
blockquote {background-color: #293133; color: #f2f2f2; padding: 4px; border-left-color: #293133;} blockquote a {color: #a2a2a2} -->
# Test your API skills
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faltametrics.com%2Fassets%2Fimages%2Fdevelopers%2Fapi-library-banner-670x200.png&f=1&nofb=1)

### Welcome to system one! This app contains several routes you can target that return mocked mashine data. You can also read a few lines on http - requests in general with a focus on methods to send data back and forth.

---

## Introduction

The Hyper Text Transfer Protocol ( HTTP ) is, in a nutshell, a collection of methods to send data back and forth on the internet. You will often find this type of methods in a Client - Server architecture, where the Client is usually the web browser and the Server is either a Mashine with a server software, like Apache or Nginx, running PHP, Java, C# or, as in this case, a Node instance behind a reverse proxy. Whenever a user decides to send data to the browser, he makes a **request** and then receives a **response** from the server. Understanding how the sending and receiving of data works is the goal of this training website. 

![](https://www.w3schools.com/whatis/img_ajax.gif)

### The most common http methods on the web are: 
> POST (Create), GET (Read), PUT | PATCH (Update), DELETE (Delete)

This website is hosted on a domain that points towards its unique URL. When developing server side software, one often refers to this URL as the **Base URL** or, as a synonyme, **Root URL**. The Root URL for this application is the same you can find in your browsers URL field, namely https://system-status-one.herokuapp.com/.

This website, however, does not only consist of its base URL, but of several Sub - URLs, too. These are often referred to as **Routes**. A route, in a nutshell, is what comes behind the backslash of the Base URL. Within this application, returns either html, such as this document you're reading right now, or **JSON**, as you will see in the following example. JSON stands for Javascript Object Notation. JSON data reads very similiar to standard Javascript Objects, but has a few differences to it. 

- JSON parameter keys always have quotation marks
- JSON parameter values cannot be functions, but only Strings, Numbers and Booleans, as well as Arrays or Objects containing these.
- Also, JSON does neither have Methods, nor does it have a Prototype. It's just data

### Route Structure

![](https://i0.wp.com/technotip.com/wp-content/uploads/nodejs/routes-node-server-request-response-technotip.png?resize=538%2C294&ssl=1)

To target the routes shown below, you can just place them in your browser's url field and hit enter. Then, your browser ( client ) will make a GET - request to the app ( server ) and write the raw data into your browser window. Note, however, that each of the routes that return JSON is protected by [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), means you will need to set the headers of your request before fetching data.

> Basic authentication is the simplest technique for enforcing access controls, because [...] HTTP Basic authentication uses standard fields in the http - header

That's also what you will do below in the tasks yourself. Basic authentication is very commonly used and usually needs to be supported by TLS or SSL ( That's what makes http**s(ecure)**). 

> TLS and SSL offer a layer of encrpytion on the communication stream between the server and the client.

#### Base URL:

```sh
$ GET https://system-status-one.herokuapp.com/
```

#### **Route for Mashine 1 data**
```sh
$ GET https://system-status-one.herokuapp.com/mashine/one
```

#### **Route for Mashine 2 data**
```sh
$ GET https://system-status-one.herokuapp.com/mashine/two
```

#### **Route for Mashine 3 data**
```sh
$ GET https://system-status-one.herokuapp.com/mashine/three
```

#### Response without authentication

```json
{
  "status": "Authorization Error",
  "statusMsg": "You are not authorized for this operation"
}
```

#### Response with correct authentication

```json
{
  "name": "Mashine 1",
  "adress": "192.168.2.101",
  "produces": "Hinges",
  "qtyToday": 2519,
  "qtyWeek": 17636,
  "status": "Ok",
  "statusMsg": "Mashine Mashine 1 is up and running.",
  "lastAct": "Tue Jun 02 2020 11:17:30 GMT+0200 (GMT+02:00)"
}
```

---

## Requirements for the tasks below

In case you are unfamiliar with Javascript and / or JSON, you can find a few links below to get you started. Knowing of Javascript is not mandatory, but will definitely make things easier on the long run. Having a basic understanding of http and JSON is, however, needed to easily complete the tasks below. Therefor, check out these links:

> [Javascript for cats](http://jsforcats.com/) is a good tutorial to get started with the basics. For a more structured approach to the syntax, you might as well try [W3School's JS course](https://www.w3schools.com/js/) and the [JSON Intro](https://www.w3schools.com/js/js_json_intro.asp). Also, do check out [W3Schools HTTP Tutorial](https://www.w3schools.com/whatis/whatis_http.asp)

---

## Tasks to do

1. Use [Postman](https://www.postman.com/) to connect to all three API endpoints shown above @Route Structure ( without authentication )

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

# Much success! I hope you'll take away a few lessons learned from this website as you go ahead. 

Hints on Task 5: 

- On Node.js, use the Axios client to make requests.

```sh
npm install axios
```

Example of how to make a get - request with axios: 

```javascript
const axios = require("axios"); 

const baseUrl = "https://system-status-one.herokuapp.com/"; 
const mashineRoute = "mashine/one"

axios.get(baseUrl + mashineRoute, {
  /*If you read this before doing the tasks above, try to figure out where this Authorization string comes from. */
  headers: {
    "Authorization": "aGV0dGljaHVzZXI6d2VsY29tZTAx" 
  }
})
.then(response => console.log(response.data))
.catch(err => console.log(err.response.data));
```