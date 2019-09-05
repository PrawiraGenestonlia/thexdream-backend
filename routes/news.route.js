const express = require("express");
const router = express.Router();
const { getSgTopNews } = require('../functions');
const util = require('util')
const read = require('node-readability');

var SgTopNews;

getSgTopNews(SgTopNews).then(response => SgTopNews = response.data).catch(err => console.log(err));
printSgTopNews = () => { console.log(util.inspect(SgTopNews, false, null, true /* enable colors */)) }

setTimeout(() => { printSgTopNews() }, 4000);

setInterval(() => {
  getSgTopNews(SgTopNews).then(response => SgTopNews = response.data).catch(err => console.log(err));
}, 300000);

router.get("/", async (req, res) => {
  res.status(200).send(SgTopNews);
});

router.post("/read", async (req, res) => {
  var req_url = req.body.url;
  read(req_url, function (err, article, meta) {
    var dom = article.document;
    var html = '<html><head><meta charset="utf-8"><title>' + dom.title + '</title></head><body><h1>' + article.title + '</h1>' + article.content + '</body></html>';
    // console.log(html);
    // console.log(meta);
    res.status(200).send(html);
  });
  // var response;
  // var url = req.body.url;
  // response.url = url;
  //node-readability
  // res.status(200).send(response);
});

module.exports = router; 