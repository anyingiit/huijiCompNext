// .prettierrc.js
module.exports = {
  printWidth: 140,// 换行长度, 超过这个长度要求强制换行
  tabWidth: 2,// tab缩进长度
  semi: true,// 强制分号结尾
  singleQuote: true,// 强制使用单引号
  trailingComma: 'none',// 强制使用拖尾逗号
  bracketSpacing: true,// 强制在对象字面量的属性中键和值之间使用空格
  bracketSameLine: false,// 将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。
  arrowParens: 'always',// 强制箭头函数参数使用圆括号
  insertPragma: false,// 在文件顶部插入一个特殊的标记，标记指定文件已使用Prettier格式化。
  requirePragma: false,// 强制在文件开头插入 @format 注释
  useTabs: false// 使用tab缩进
};