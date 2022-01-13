#!/usr/bin/env node
// 引入fs-extra软件包
var fs = require("fs-extra");
var ora = require('ora')

// var source = 'folderA'
// var destination = 'folderB'

// // 将源文件夹复制到目标
// fs.copy(source, destination, function (err) {
//   if (err) {
//     console.log('An error occured while copying the folder.')
//     return console.error(err)
//   }
//   console.log('Copy completed!')
// });

function copy(source, destination) {
  
   const spinner = ora('Loading unicorns').start();

   setInterval(() => {
     spinner.color = 'yellow';
     spinner.text += '.';
   }, 200);
  fs.copy(source, destination, function (err) {
    if (err) {
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
    spinner.stop()
    console.log('Copy completed!')
    process.exit()
    
  });
}

module.exports = {
  copy
}