const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`This app is running on http://localhost:${port} \n`);
});
