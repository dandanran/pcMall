import {GETUSER} from './types'
import getters from './getters'
import * as types from "./types";

const state = {
    // 保存在localstorage中一份,处理f5刷新
    // (后期可学习更方便的方式,目前还不会只能这样了)
    user: window.JSON.parse(localStorage.getItem("user")),
};

// 用于具体改变数据
const mutations = {

    [GETUSER](state, user) {
        state.user = user;
        localStorage.setItem("user", window.JSON.stringify(user));
    }
};

export default {
    state,
    mutations,
    getters
}
