var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express - Deployed with Azure DevOps pipelines on a Windows OS' });
});

module.exports = router;
