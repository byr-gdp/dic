#!/usr/bin/env node
var request = require('request');
var colors = require('colors');

var param = process.argv[2];
var word = param ? param : '';
request('http://fanyi.youdao.com/openapi.do?keyfrom=if-true&key=1663906878&type=data&doctype=json&version=1.1&q=' + word, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    var query = data.query;
    var phonetic = '美音:[' + data.basic['us-phonetic'] + ']' + ' 英音:[' + data.basic['uk-phonetic'] + ']';
    var explains = data.basic.explains.join(';');
    console.log(('单词:' + query).green);
    console.log(('发音:' + phonetic).yellow);
    console.log(('释义:' + explains).cyan);
  }

});
