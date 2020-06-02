const Mashine = require("../../classes/mashine");

const GET_MASHINE_ONE = (req, res, next) => {
  const base64 = req.get("Authorization");
  const auth = base64 ? Buffer.from(base64, "base64").toString("utf-8") : ""

  if (auth === "hettichuser:welcome01") {
    const mashine_one = new Mashine(
      "Mashine 1",
      "Hinges",
      "192.168.2.101"
    );
    res.send(mashine_one);
  } else {
    res.status(401).send({
      status: "Authorization Error",
      statusMsg: "You are not authorized for this operation",
    });
  }
};

module.exports = GET_MASHINE_ONE;
