var express = require('express');
var router = express.Router();

var config=require('../config/my_cms.js');
var getFileTree=require('../server/fileServer').getFileTree;
var readFileSync=require('../server/fileServer').readFileSync;
var readPicSync=require('../server/fileServer').readPicSync;
var writeFile=require('../server/fileServer').writeFile;

/* GET users listing. */
router.get('/getFileTree', function(req, res, next) {
  var ph={path:config.staticPath,exclude:''};

  (req.query.pathType==1||req.query.pathType=="1")?"":
      (req.query.pathType==2||req.query.pathType=="2")?ph={path:config.ejsPath,exclude:null}:"";
  res.send(getFileTree({text:'static',path:ph.path,exclude:ph.exclude}));
});

router.get('/getFileContent', function(req, res, next) {

  res.send({filedata:readFileSync({path:req.query.path})});
});

router.post('/saveFileContent', function(req, res, next) {

  writeFile({fileName:req.body.fileName,fileData:req.body.fileData,callBack:saveFileContentCb(res)});
  //res.send('3333');
});

router.get('/showPic', function(req, res, next) {

  var ph=req.query.ph;
  var content =  readPicSync({path:ph});
  res.write(content,"binary");
    res.end();
})

function saveFileContentCb(res){
  console.log(9090);
  res.send('1');
}
module.exports = router;
