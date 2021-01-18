export default {
  namespaced: true, // 定义为独立的命名空间
  state: {
    count: 0
  },
  getters: {
    // 在模块中，计算方法还会具有rootState、rootGetters参数以获取根模块中的数据
    tenTimesCount (state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters)
      return state.count * 10
    }
  },
  mutations: {
    addCount (state, num) {
      state.count += num || 1
    }
  },
  actions: {
    // context具有和store实例相同的属性和方法
    // 可以通过context获取state和getters中的值，或者提交mutation、分发action
    // 在模块中，context还会具有rootState和rootGetters属性以获取根模块中的数据
    addCountAsync (context, num) {
      setInterval(function () {
        if (context.state.count < 2000) {
          context.commit('addCount', num || 100)
        }
      }, num || 100)
    }
  }
}