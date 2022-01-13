#!/usr/bin/env node

var program = require('commander')

program
  .version('0.0.1', '-v, -version')
  .option('-l, --list [name]', 'this is a list')
  .command('create', 'this is acommand')

program.parse(process.args)
