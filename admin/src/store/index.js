import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false, //是否折叠侧边栏
    userInfo: {}, //个人信息
  },
  getters: {},
  mutations: {
    changeGetterRouter(state, value) {
      state.isGetterRouter = value;
    },
    //控制侧边栏的展开
    changeCollapsed(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    //改变个人信息
    changeUserInfo(state, value) {
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state, value) {
      state.userInfo = {}
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
    paths: ['isCollapsed', 'userInfo'] //是否控制持久化
  })]
});
