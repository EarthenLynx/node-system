const Mashine = require("../../classes/mashine");

const GET_MASHINE_THREE = (req, res) => {
  const base64 = req.get("Authorization");
  const auth = base64 ? Buffer.from(base64, "base64").toString("utf-8") : "";

  if (auth === "hettichuser:welcome01") {
    const mashine_three = new Mashine(
      "Mashine 3",
      "Screws",
      "192.168.2.103"
    );

    res.send(mashine_three);
  } else {
    res.status(401).send({
      status: "Authorization Error",
      statusMsg: "You are not authorized for this operation",
    });
  }
};

module.exports = GET_MASHINE_THREE;
