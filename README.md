# HASHF - hash file and rename it

生成文件hash，并按指定格式重命名文件

## 已实现特性

- [x] 支持cli命令 `hashf --p(ath) --a(lgorithm) --i(gnore) --f(ormat) -l(ength)`
- [x] 异步处理
- [x] 支持指定文件夹路径或具体某文件路径，支持glob模式匹配，字符串或者数组
- [x] 可选择的递归遍历子文件夹
- [x] 通过`exclude`参数可以配置排除掉匹配结果中的某些文件，支持glob模式
- [x] 支持指定哈希长度，默认为8
- [x] 支持指定哈希算法，默认为md5
- [x] 支持文件重命名的格式，预置插值变量可选值参考[path.parse](http://nodejs.cn/api/path.html#path_path_parse_path)，默认格式为`{dir}/{name}@{hash}{ext}`

## 安装

```bash
# 项目中安装
npm install --save hashf

# 全局安装
npm install --save hashf
```

## 示例

// 指定文件夹路径

// 指定文件路径

// glob模式

// 多文件

// 排除 


## TODO

- [ ] 完善文档
- [ ] 优化工程，加入 eslint 等，之后做为统一的node模块脚手架
- [ ] 补充打印日志
    - 具体技术细节
    - glob的方式取路径
    - 开始处理，处理时间
    - 日志打印，正在处理，处理结果
    - 处理完成，总耗时
- [ ] 重构为TS
