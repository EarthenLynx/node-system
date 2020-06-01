const Mashine = require("../../classes/mashine");

const GET_MASHINE_ONE = async (req, res, next) => {
  const base64 = await req.get("Authorization");
  const auth = await Buffer.from(base64, "base64").toString("utf-8");

  if (auth === "hettichuser:welcome01") {
    const mashine_one = await new Mashine(
      "Mashine 1",
      "Hinges",
      "192.168.2.101"
    );
    await res.status(401).send(mashine_one);
  } else {
    await res.send({
      status: "Authorization Error",
      statusMsg: "You are not authorized for this operation",
    });
  }
};

module.exports = GET_MASHINE_ONE;
