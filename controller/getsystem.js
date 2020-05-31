const os = require("os");

/*
 * @desc
 * Controller to send system - relevant information to a client.
 *
 * @exports
 * 1. node_process          From runtime process
 * 2. node_os               From os - module
 *
 * 1: Process
 * process.ppid             The ID of the node process
 * process.env.USERNAME     Owner of node process
 * cpu_usage                user and system cpu usage
 *
 * 2: OS Module
 * arch()                   op - system CPU Architecture
 * cpus()                   Array of system's CPUs
 * uptime()                 Returns uptime in seconds
 * freemem()                Free memory in bytes ( get it in MB and GB)
 * totalmem()               Total memory in bytes
 * hostname()               Name of the server
 * networkInterfaces()      Connected network interfaces
 */

const GET_SYSTEM = async (req, res) => {
  const node_process = await {
    id: process.ppid,
    user: process.env.USERNAME,
    cpu_usage: process.cpuUsage(),
  };

  const node_os = await {
    platform: os.platform(),
    arch: os.arch(),
    cpu: os.cpus(),
    uptime: os.uptime(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    hostname: os.hostname(),
    network: os.networkInterfaces(),
  };


  const node_system = await {
    node_os,
    node_process,
  };

  await res.send(node_system);
};

module.exports = GET_SYSTEM;
