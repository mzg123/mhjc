var express = require('express');
var router = express.Router();

var config=require('../config/my_cms.js');
var getFileTree=require('../server/fileServer').getFileTree;
var readFileSync=require('../server/fileServer').readFileSync;

/* GET users listing. */
router.get('/getFileTree', function(req, res, next) {

  res.send(getFileTree({text:'static',path:config.staticPath}));
});

router.get('/getFileContent', function(req, res, next) {

  res.send({filedata:readFileSync({path:req.query.path})});
});
module.exports = router;
