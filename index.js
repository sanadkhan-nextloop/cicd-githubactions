const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send({ message: "From backend Production"})
});

app.listen(3000, () => {
  console.log("App listening on 3000")
});