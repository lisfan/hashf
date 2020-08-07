/**
 * @file variables-replace.js
 * @description 变量替换
 * @author lisfan
 * @date 2020-08-07 14:32:13
 */

module.exports = function variablesReplace(format = '', data = {}) {
    let replacedText = format

    Object.entries(data).forEach(([key, value]) => {
        replacedText = replacedText.replace(new RegExp(`\{${key}\}`, 'gi'), value)
    })

    return replacedText
}

