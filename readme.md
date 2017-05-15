# 邮件地址验证
## 需求描述
给定邮件地址和邮箱后缀列表，如果该邮件地址满足任一后缀，则为合法，否则为非法地址。
例如：给定邮件地址 `tom@gmail.com`，后缀列表：`['gmail', 'qq']`。

## 作业要求
1. 根据```spec/main-spec.js```中的测试用例，在```src/main.js```文件中编写实现代码并确保测试通过；
2. 请在保证代码可读性的前提下，尽可能用最少的代码行数完成作业。

## 作业提示
1. 使用 `console.log` 输出调试
2. split 方法可以切割字符串

## 如何使用

首先初次下载完需要安装依赖：
```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。

## 参考资料
1. [npm 下载安装](https://github.com/npm/npm)
2. [node 下载安装](https://github.com/creationix/nvm)
3. [jasmine用法](http://jasmine.github.io/2.4/introduction.html)
4. [git简易指南](http://gitref.org/zh/index.html)
5. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
6. [String Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## 答题流程
- 请用户仔细阅读题目要求和题目描述

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
NOTE：如果提示git命令未找到请先阅读参考资料
- 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
src   //源文件
```
`请在src文件下的main.js文件内实现main函数`

- 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
- 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 
- 获取分支
- 提交
- 等待结果


## 如何本地运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
