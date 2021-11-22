// export default class NewsController { //this dose not work
class NewsController {
  // this dose work, i think the export default class dose not work for common ejs modules
  // 

  static async homePage(req, res, next) {
    res.render('news');
  }
  //
}

module.exports = NewsController;
