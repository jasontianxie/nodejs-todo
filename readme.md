
根据https://github.com/alsotang/node-lessons完成。

1、新建目录

2、安装node（自动安装npm）

3、初始化npm。找到新建的目录，按住shift点鼠标右键，选择在此处打开命令窗口，运行命令npm init

也可以直接新建一个文件，命名为package.json，然后根据package.json的格式填写各个字段。

4、更改npm源为淘宝镜像（推荐） 
npm set registry https://registry.npm.taobao.org

# 默认源
npm config set registry https://registry.npmjs.org

# https -> http，这样网速就会好很多
npm config set registry http://registry.npmjs.org 


5、安装express框架
npm install express --save

6、新建app.js（就是要运行的文件）
