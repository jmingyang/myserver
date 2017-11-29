var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/postpage', function(req, res, next) {
   res.send('Got a POST request');
  // var body = "";
  // req.on('data', function (chunk) {
  //   body += chunk;
  // });
  // req.on('end', function () {
  //   // 解析参数
  //   body = querystring.parse(body);
  //   // 设置响应头部信息及编码
  //   res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
  //   res.send(time + ' Got a POST request at'+place);
  //   res.end();
  // });
});

module.exports = router;
