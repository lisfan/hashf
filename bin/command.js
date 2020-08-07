#!/usr/bin/env node

/**
 * @file command.js
 * @description cli命令帮助教程，以及规定可接收的参数值
 * @author lisfan
 * @date 2020-08-06 10:15:37
 */

const yargs = require('yargs')
const config = require('../lib/config')

module.exports = yargs.options('p', {
    alias: ['path'],
    describe: '指定文件或文件夹路径',
    demandOption: true,
    type: 'string',
}).options('a', {
    alias: ['algorithm'],
    describe: '指定哈希算法',
    default: config.algorithm,
    type: 'string',
}).options('f', {
    alias: ['format'],
    describe: '指定命名格式',
    default: config.format,
    // demandOption: true,
    type: 'string',
}).options('i', {
    alias: ['ignore'],
    describe: '指定要忽略的文件名列表，支持glob模式',
    // demandOption: false,
    default: config.ignore,
    type: 'string',
}).options('l', {
    alias: ['length'],
    describe: '指定保留的hash长度',
    default: config.length,
    // demandOption: false,
    type: 'number',
})
    .example('npm run build -- --mode=release', '指定为预发环境构建')
    .wrap(140)
    // .hide('help')
    // .hide('version')
    .epilogue('更多内容，请查看项目根目录 README.md 文档')

// @TODO 补充列子
//
// // 如果是运行了help命令，则显示help
// if (process.env.npm_config_argv && JSON.parse(process.env.npm_config_argv).original[1] === 'help') {
//   yargs.showHelp()
// }

require('../index')
