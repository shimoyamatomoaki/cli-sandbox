#! /usr/bin/env node
/**
 * hello-nodejs-command.js
 */

var program = require('commander');
var ProgressBar = require('progress');

program
    .version('0.0.1')
    .option('-n, --name [Your Name]', 'Specify your name.')
    .parse(process.argv);

if(!program.name) {
  program.help();
} else {
  showProgressBar();
}

function showProgressBar() {
  var bar = new ProgressBar('Waiting... [:bar] :percent :etas', { total: 10, complete: '*' });
  var timer = setInterval(function(){
    bar.tick();
    if(bar.complete){
      console.log('\ncomplete\n');
      clearInterval(timer);
      console.log('Hello %s', program.name);
    }
  }, 500);
}
