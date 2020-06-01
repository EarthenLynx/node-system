const exec = require("child_process").exec;
const parser = require("table-parser");
const os = require("os");

/*
 * @desc
 * Controller to send running system - processes and services to the client
 *
 * @exports
 * 1. id                    Process ID
 * 2. name                  Name of the process
 * 3. type                  If its a system service or not
 * 4. memory                memory (kb) this processes uses
 */

const GET_PROCESSES = (req, res) => {
  // This works only on windows system as of now
  return new Promise((resolve) => {
    if ((os.platform() === "win32") | (os.platform() === "win64")) {
      exec("tasklist", (err, stdout, stderr) => {
        if (err) throw err;
        if (stderr) {
          resolve(res.send(JSON.stringify(stderr)));
        }
        let [header, ...rawJson] = parser.parse(stdout);
        let data = rawJson.map((el) => ({
          id: parseInt(Object.values(el)[1].join("")),
          name: Object.values(el)[0].join(""),
          type: Object.values(el)[2].join(""),
          // Format the resources accordingly and remove the decimal point
          memory: parseInt(
            Object.values(el)[4].splice(0, 1).join("").replace(".", "")
          ),
        }));

        resolve(res.send(JSON.stringify(data)));
      });
    } else {
      // TODO: Add functionality for linux, too.
      resolve(res.send({ msg: "This platform is not supported yet" }));
    }
  });
};

module.exports = GET_PROCESSES;
