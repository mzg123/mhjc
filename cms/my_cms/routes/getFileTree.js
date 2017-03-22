var express = require('express');
var router = express.Router();

var config=require('../config/my_cms.js');
var getFileTree=require('../server/fileServer').getFileTree;

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(getFileTree({text:'static',path:config.staticPath}));
});

module.exports = router;
