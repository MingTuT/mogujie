import Vue from 'vue'
import VueX from 'vuex'
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions"

Vue.use(VueX)

const state = {
  // 默认tabBar显示
  tabBarShow: true,
  // 购物车数据
  cartList: [],
  // 是否开启请求加载
  isLoading: true
}

export default new VueX.Store({
  state,
  getters,
  mutations,
  actions
})