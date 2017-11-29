var express = require('express');
var router = express.Router();
var http = require('http');
var fs=require("fs");
var querystring = require('querystring');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/download/*', function(req, res, next) {
  var path="/Users/lucid/Desktop/图片/桌面背景/43a7d933c895d143c434af7077f082025aaf0726.jpg";
  var f = fs.createReadStream(path);
  res.writeHead(200, {
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename=hhhh'
  });
  f.pipe(res);
});
router.post('/postpage', function(req, res, next) {
   // res.send('Got a POST request');
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
 
    res.send(body.time + ' Got a POST request at '+ body.place);
    res.end();
  });
});


module.exports = router;
