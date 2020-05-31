const exec = require("child_process").exec;
const parser = require("table-parser");

const GET_PROCESSES = (req, res) => {
  return new Promise((resolve) => {
    exec("tasklist", (err, stdout, stderr) => {
      resolve(res.send(parser.parse(stdout)));
    });
  });
};

module.exports = GET_PROCESSES;
