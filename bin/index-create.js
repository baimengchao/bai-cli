#!/usr/bin/env node
var inquirer = require('inquirer')
var {copy} = require('./createProject.js')
const path = require('path')

console.log(copy, JSON.stringify(copy))


const questions = [
  {
    type: 'input',
    message: '请输入项目名称',
    name: "projectName",
    default: 'myProject'
  }
]

inquirer.prompt(questions).then((data)=>{
  console.log('__dirname', __dirname)
  copy(path.resolve(__dirname, '../src/myproject'), data.projectName, function (err) {
    console.log(111)
  })
})