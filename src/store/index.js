import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 这就是一个 store的子模块
import studyModule from "./modules/study"
import song from "./modules/song"

const store = new Vuex.Store({
    // 这个选项用于把子modules进行合并,带命名空间
    modules:{
        study:studyModule,
        song
    }
})

export default store