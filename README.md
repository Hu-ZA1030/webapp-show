# webapp-show

## Project setup
```
npm install
```
## 下载vue脚手架的命令,全局安装脚手架，以后直接使用就行
```
    npm install @vue/cli -g
```


## 使用 vue-cli 脚手架搭建我们的项目

### 1，创建项目命令： 使用终端，在我们项目的路径下 
```
 vue create 项目名
```
### 2，运行我们的项目，使用 命令
```
 npm run serve
```

### 3，在package.json 配置文件中添加一个 start 属性，然后运行项目命令是： npm start
```
"start":"npm run serve"
```

### 使用 npm 来安装第三方模块
    npm install xxx -S  把包的记录在 ependencies 这里
    npm install yyy -D  把包的记录在 devDependencies 这里
    npm install  会根据根目录中的package.json文件中记录的第三方包来进行安装。
    npm install zzz -g  全局安装永久可用


## devtools 拓展的安装
    从GitHub上克隆项目  https://github.com/arcliang/Vue-Devtools-
然后在谷歌浏览器：设置-扩展程序-倒入扩展包

## webpack 
本地服务器，指向 public 目录
热更新：webpack 实时监测代码的变化，并实时编译，页面更新自动更新
当 npm start 启动了本地服务器后，webpack 就会动态把入口文件 main.js编译压缩插入到index.html文件中

## 路由
1，单页面应用程序（SPA）
    使用 vue-router 让 SPA 开发非常简单
    安装 ： npm install vue-router -S
    在src/router.js 文件，注册路由，创建路由实例并抛出
    在入口文件 main.js 文件引入路由实例并且挂载
    在App.vue组件中，使用内置组件<router-view></router-view>容器来放置匹配成功的组件
    使用<router-link></router-link>实现页面跳转

2，路由的三个问题：
    a:安装与配置：设计路径和组件匹配概关系（一一对应）；
    b:和路径匹配的成功的组件在 <router-view></router-view>中显示
    c:改变URL？(使用router-link(声明式路由),使用编程式路由)


在 vue 中如何使用组件之间互相传值???


状态管理 vuex

1,了解vuex
状态: 数据,视图
状态管理的本质就是对应用程序的数据进行科学的管理

React对于数据很难管理,后面就研发出来了Flux一种数据管理架构方案,这是一种数据管理的思想
而vue 根据React 而研发出来,而vuex也是一种数据管理方案,可预期数据的变化,而vuex只是数据管理方案,并不是vue必须的,也就是是不用vue也可以开发很好的项目

2,安装vuex
a:安装到node_modeul中
    npm install vuex -S
b:集成到项目


### axios
1,axios 有什么优势?
    -基于promise封装,用起来非常方便解决了回调地狱的问题
    -它在客户端和node.js服务器端都可以进行使用
2,安装:
    npm install axios -S

    封装axios:
        封装请求拦截器
        封装响应拦截器
    请求的过程
    响应的过程


## UI设计
dpi = 液晶屏幕px尺寸 / 物理尺寸

rem : 相对与html元素的字体  r---> root
em ： 相对于当前的元素 父级元素 的foot-size
px :  绝对尺寸

所谓的 rem 布局 就是以rem为单位的进行尺寸设置
做法： 无论我们网页运行在什么硬件,都不根字体设置当前硬屏幕的十分之一，那么，1rem = 屏幕宽度的十分之一

##sass
    安装 ： npm install node-sass sass-loader -D
    全局变量： common.scss  样式文件


## vant
安装 npm i vant -S
# 方式一. 自动按需引入组件 (推荐) 安装插件 
npm i babel-plugin-import -D


下载 vue-cli
vue