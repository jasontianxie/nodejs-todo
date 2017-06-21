//lesson3

// 引入依赖
var express = require('express');
var utility = require('utility');
var superagent = require('superagent');//superagent（http://visionmedia.github.io/superagent/）是一个http代理，可以发送各种请求，也就是说可以在js中发送这些请求，而不用在浏览器中去发送了
var cheerio = require('cheerio');//(https://github.com/cheeriojs/cheerio )对得到的html页面，cheerio可以用类似jQuery的方法来操作
// 建立 express 实例
//lesson2


var app = express();//express官网： http://expressjs.com/。在api页面中可以查看各种配置，页面右边有个导航

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });

      res.send(items);
    });
});

app.listen(5555, function (req, res) {
  console.log('app is running at port 5555');
});