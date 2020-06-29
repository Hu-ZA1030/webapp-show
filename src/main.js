// 整个VUE项目的入口文件

// 安装Vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'

//  关闭项目启动的生产提示：默认都是 false
Vue.config.productionTip = false

// 将我们创建的router.js 管理起来
import router from './router.js'
import store from "./store/index.js"

// 创建根组件实例
new Vue({
  router, // 将路由挂载注册
  store,
  render: h => h(App),
}).$mount('#app')
// $mount() 使用手动挂载,将我们的#app的实例挂载到文档上去 
// 第二张挂载方式

