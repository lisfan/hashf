/**
 * @file glob-enhance.js
 * @description glob模块增强，支持传入字符串和数组字符串的路径，还支持exclude不包含匹配路径的配置
 * @author lisfan
 * @date 2020-08-06 10:15:37
 */

const fs = require('fs')
const glob = require('glob')
const _ = require('lodash')

glob.globs = function globEnhance(options) {
    if (!_.isPlainObject(options)) {
        options = {include: options, exclude: [], options: {}}
    }

    const includeList = _.castArray(options.include)

    const globPromiseList = includeList.map((includePattern) => {
        // 如果不含magic特殊字符
        // 再判断指定文件是否存在
        // 则进行常规的文件夹类型还是文件类型判断
        if (!glob.hasMagic(includePattern)) {
            if (!fs.existsSync(includePattern)) {
                return resolve([])
            }

            if (fs.statSync(includePattern).isDirectory(includePattern)) {
                includePattern = includePattern + '/**'
            }
        }

        return new Promise((resolve, reject) => {
            glob(includePattern, {
                ...options.options,
                ignore: options.exclude,
            }, function (err, filePath) {
                if (err) reject(err)
                else resolve(filePath)
            })
        })
    })

    return Promise.all(globPromiseList).then((filePathLists) => {
        return _.uniq(_.flatten(filePathLists))
    })
}

module.exports = glob
