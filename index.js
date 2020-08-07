const chalk = require('chalk')
const yargs = require('yargs')
const hasha = require('hasha')
const glob = require('./utils/glob-enhance')
const hashFile = require('./lib/hash-file')

glob.globs({
    include: ['/Users/lisfan/lisfan/Uncategorized/test/**', '/Users/lisfan/lisfan/Uncategorized/test2'],
    exclude: yargs.argv.ignore,
    options: {
        nosort: true,
        nodir: true,
    }
}).then((filePathList) => {
    if (filePathList.length === 0) {
        console.log(chalk.red(`[error]`), `未匹配到文件`)
        process.exit()
    }

    filePathList.forEach((filePath) => {
        hasha.fromFile(filePath, {
            algorithm: yargs.argv.algorithm
        }).then((hash) => {
            return hashFile({
                path: filePath,
                data: {
                    hash: hash.slice(0, yargs.argv.length)
                },
                format: yargs.argv.format
            }).then(() => {
                console.log(chalk.green(`=> [success] ${filePath}`))
            })
        })
    })
})



