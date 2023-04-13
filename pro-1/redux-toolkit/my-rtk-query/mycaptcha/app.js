const express = require("express");
const app = express();
const path = require("path");
const PORT = 4500;

const Chaptca = require("node-captcha-generator");
const { log } = require("console");

app.get("/get-chapta", async (req, res, next) => {
  let c = new Chaptca({
    length: 5,
    size: {
      width: 450,
      height: 200,
    },
  });

  await c.toBase64(async (err, Base64) => {
    if (err) {
      res.send({ id: 1, name: "Chaptcha loading failed" });
    } else {
      console.log(c.value, "==========");
      res.send(Base64);
      console.log(Base64);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is runnin on port ${PORT}`);
});
