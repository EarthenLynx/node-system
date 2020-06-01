const Mashine = require("../../classes/mashine");

const GET_MASHINE_TWO = (req, res) => {
  const base64 = req.get("Authorization");
  const auth = base64 ? Buffer.from(base64, "base64").toString("utf-8") : "";

  if (base64 & auth === "hettichuser:welcome01") {
    const mashine_two = new Mashine(
      "Mashine 2",
      "Moldings",
      "192.168.2.102"
    );
    res.status(200).send(mashine_two);
  } else {
    res.status(401).send({
      status: "Authorization Error",
      statusMsg: "You are not authorized for this operation",
    });
  }
};

module.exports = GET_MASHINE_TWO;
