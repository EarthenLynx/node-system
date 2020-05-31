const exec = require("child_process").exec;
const parser = require("table-parser");

/*
 * @desc
 * Controller to send running system - processes and services to the client
 *
 * @exports
 * 1. id                    Process ID
 * 2. name                  Name of the process
 * 3. type                  If its a system service or not
 * 4. memory                memory (kb) this processes uses
 *
 */

const GET_PROCESSES = (req, res) => {
  return new Promise((resolve) => {
    // This works only on windows system
    // TODO: Add functionality for linux, too.
    exec("tasklist", (err, stdout, stderr) => {
      let [header, ...rawJson] = parser.parse(stdout);
      let data = rawJson.map(el => ({
        id: parseInt(Object.values(el)[1].join("")), 
        name: Object.values(el)[0].join(""), 
        type: Object.values(el)[2].join(""), 
        // Format the resources accordingly and remove the decimal point
        memory: parseInt(Object.values(el)[4].splice(0, 1).join("").replace(".", ""))
      }))
      
      resolve(res.send(JSON.stringify(rawJson)));
    });
  });
};

module.exports = GET_PROCESSES;
