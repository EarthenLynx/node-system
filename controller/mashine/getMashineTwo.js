const Mashine = require("../../classes/mashine");

const GET_MASHINE_TWO = async (req, res) => {
  const base64 = await req.get("Authorization");
  const auth = await Buffer.from(base64, "base64").toString("utf-8");

  if (auth === "hettichuser:welcome01") {
    const mashine_two = await new Mashine(
      "Mashine 2",
      "Moldings",
      "192.168.2.102"
    );
    await res.send(mashine_two);
  } else {
    await res.send({
      status: "Authorization Error",
      statusMsg: "You are not authorized for this operation",
    });
  }
};

module.exports = GET_MASHINE_TWO;
