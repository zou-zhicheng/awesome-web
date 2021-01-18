import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter' // 引入加数器模块

Vue.use(Vuex) // 安装插件

export default new Vuex.Store({ // 实例化Vuex仓库
  modules: {
    counter
  }
})