#!/usr/bin/env node

var option = require('commander');

option
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-p, --port <n>', 'Set Port Number',(val)=>{return val}, 8080)
  .option('-h, --host <s>', 'Set Host Address',(val)=>{return val}, 'localhost')
  .option('-d, --dir <s>', 'Set Server Directory',(val)=>{return val}, '')
  .option('-t, --test', 'Testing build')
  .parse(process.argv);

try{

  const express = require('express'),
  opn = require('opn'),
  php = require("node-php"),
  path = require("path");

  var app = express();

  app.use("/", php.cgi(process.cwd()+"/"+option.dir));

  app.listen(option.port, option.host);
  console.log("Server listening http://"+ option.host + ":" +option.port);
  opn('http://'+ option.host + ':'+option.port);

}catch(e){
  console.error(e);
}
