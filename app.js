const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// configuring port
const port = process.env.PORT || 5000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// Template Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const newsRouter = require("./src/routes/news.route.js");
app.use("/", newsRouter);

// start the app on port
app.listen(port, () => {
  console.log(`This app is running on http://localhost:${port} \n`);
});
