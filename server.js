const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World! ps: Alexandr ky-ky");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});