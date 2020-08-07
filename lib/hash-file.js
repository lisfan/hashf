/**
 * @file hash-file.js
 * @description 重命名文件
 * @author lisfan
 * @date 2020-08-07 14:37:01
 */
const pathUtils = require('path')
const fs = require('fs')
const variablesReplace = require('../utils/variables-replace')

// @TODO 文件hash不对时自动替换成新的
module.exports = function hashFile({path, data, format} = options) {
    // 解析路径，并且与data混合
    const fillData = {
        ...data,
        ...pathUtils.parse(path),
    }

    // 替换变量
    const replacedText = variablesReplace(format, fillData)

    return fs.promises.rename(path, replacedText)
}

