# [Web](../index.md) - [Vue.js](index.md)

# 介绍

# vuejs

## vuejs

```
var vue = new Vue({
	el: '',
	template: '',
	data: {},
  data () { return {} },
	computed: {},
	methods: {},
	filters: {},
	watch: {
    watchItem(newValue, oldValue) {}
	},
	render(c) {},
	// 自定义指令
	directives: {},
	// 组件注册
	components: {},
	// 混入
	mixins: [],
  // 生命周期方法
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
	beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
})
```

## vue component

```
Vue.component('component-name', {
  data () { return {} },
  props: {},
  template: '',
  methods: {},
  render(createElement){}
})
```



## v-bind

## v-on

## v-model

## v-if / v-show / v-for

## slot



# vue-router

```
  let routes = [
    { path: '/', component: Home },
    { 
      path: '/about', 
      component: About,
      children: [ // 2. 嵌套子路由
        { path: 'author', component: Author },
        { path: 'email', component: Email }
      ]
    }
  ]
  let router = new VueRouter({ // 创建VueRouter实例, 并传入routes配置
    routes
  })
  let app = new Vue({
    router
  })
```



# vuex

# App.vue(vue单页面文件)



# vue-cli

# vue-devtools

在使用 Vue 时，我们推荐在你的浏览器上安装 [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools)。它允许你在一个更友好的界面中审查和调试 Vue 应用。

Vue.js devtools是基于google chrome浏览器的一款调试vue.js应用的开发者浏览器扩展，可以在浏览器开发者工具下调试代码。

## Github

[https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)



## 安装-Chrome插件

需要翻墙

## 安装-Firefox插件

## 安装-standalone Electron app

如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。

Electron 基于 Chromium 和 Node.js, 让你可以使用 HTML, CSS 和 JavaScript 构建应用。

Electron 兼容 Mac, Windows 和 Linux， 它构建的应用可在这三个操作系统上面运行。



## 安装-本地

- 首先在github下载devtools源码，地址：[https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)	

- 下载好后进入vue-devtools-master工程 执行cnpm install, 下载依赖

- 然后执行npm run build，编译源程序

- Open Chrome extension page

  游览器输入地址“chrome://extensions/”进入扩展程序页面

- Check "developer mode"

  ![chrome_dev_mode](images\chrome_dev_mode.jpg)

- 点击“加载已解压的扩展程序...”按钮，选择vue-devtools>shells下的chrome文件夹

- 添加完成

## 使用

当我们添加完vue-devtools扩展程序之后，我们在调试vue应用的时候，chrome开发者工具中会看一个vue的一栏，点击之后就可以看见当前页面vue对象的一些信息

![vue_devtool_usage](images\vue_devtool_usage.jpg)

# 编辑器

vs code

# 开发一个简单项目

本文简单开发一个vue.js项目

## 创建

1. 安装一些必要的插件

   ```
   npm install -g npm-install-peers
   npm install -g npm
   ```

   

2. 创建一个基于 webpack 模板的新项目

   ```
   vue init webpack vue-project
   ```

   需要回答和选择一系列问题

   生成界面如下

   ```

   ```

   

3. 源代码编辑

   ```
   cd vue-project
   ```

   编辑源代码

4. 安装

   ```
   npm install
   ```

5. 运行

   ```
   npm run dev
   ```

6. 访问

   ```
   http://localhost:8080
   ```

## 目录

| 目录/文件        | 说明                                       |
| ------------ | ---------------------------------------- |
| build        | 项目构建(webpack)相关代码                        |
| config       | 配置目录，包括端口号等。我们初学可以使用默认的。                 |
| node_modules | npm 加载的项目依赖模块                            |
| src          | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：assets: 放置一些图片，如logo等。components: 目录里面放了一个组件文件，可以不用。App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。main.js: 项目的核心文件。 |
| static       | 静态资源目录，如图片、字体等。                          |
| test         | 初始测试目录，可删除                               |
| .xxxx文件      | 这些是一些配置文件，包括语法配置，git配置等。                 |
| index.html   | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。           |
| package.json | 项目配置文件。                                  |
| README.md    | 项目的说明文档，markdown 格式                      |

# Django项目集成

如何与django项目进行集成

# 整理 

以vue.js为例子，来讲解前端组件设计的基本思路

1. 前端演进与前端组件设计基本思路

2. 基础实例

3. DOM选择

4. DOM绑定

5. vue.js程序语言

   介绍vue.js中的程序设计，包含

   常量，变量，数据类型，流程控制，异常处理

   等语言方面的知识

6. 操纵显示

   控制前端显示，对应css方面的内容

7. 操作数据

   如何抽象出model

   组件如何与model进行绑定

   如何控制数据交互

8. 组件

9. 打包

10. 插件

11. 如何调试

12. 如何查找资料

13. 其他

# 参考资料

[http://www.runoob.com/vue2/vue-tutorial.html](http://www.runoob.com/vue2/vue-tutorial.html)

[我如何使用 Django + Vue.js 快速构建项目](https://zhuanlan.zhihu.com/p/25080236)

