var express = require('express');
var router = express.Router();

var config=require('../config/my_cms.js');
var getFileTree=require('../server/fileServer').getFileTree;
var readFileSync=require('../server/fileServer').readFileSync;
var writeFile=require('../server/fileServer').writeFile;

/* GET users listing. */
router.get('/getFileTree', function(req, res, next) {
  var ph=config.staticPath;

  (req.query.pathType==1||req.query.pathType=="1")?"":
      (req.query.pathType==2|req.query.pathType=="2")?ph=config.ejsPath:"";
  res.send(getFileTree({text:'static',path:ph}));
});

router.get('/getFileContent', function(req, res, next) {

  res.send({filedata:readFileSync({path:req.query.path})});
});

router.post('/saveFileContent', function(req, res, next) {

  writeFile({fileName:req.body.fileName,fileData:req.body.fileData,callBack:saveFileContentCb(res)});
  //res.send('3333');
});
function saveFileContentCb(res){
  console.log(9090);
  res.send('1');
}
module.exports = router;
