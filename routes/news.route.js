const express = require("express");
const router = express.Router();
const { getSgTopNews } = require('../functions');
const util = require('util')
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

module.exports = router; 