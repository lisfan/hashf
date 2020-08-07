/**
 * @file config.js
 * @description 默认配置参数
 * @author lisfan
 * @date 2020-08-07 00:23:51
 */

module.exports = {
    ignore: '', // 忽略列表
    algorithm: 'md5', // 哈希算法
    length: 8,  // 哈希长度
    format: '{dir}/{name}@{hash}{ext}', // 命名格式
}
