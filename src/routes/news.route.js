const express = require("express");
// const { default: NewsController } = require("../controllers/news.controller");
// const { NewsController } = require("../controllers/news.controller");
const NewsController = require("../controllers/news.controller");
const router = express.Router();

router.route('').get(NewsController.homePage);

// export default router; //this dose not work
module.exports = router; // this does work
