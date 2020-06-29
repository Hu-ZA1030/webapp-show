// 引入 vue
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 挂载
Vue.use(Vuex)

// 创建实例
const store = new Vuex.Store({
    // state :它是vuex的数据存储中心,在任何一个组件都可以访问到state的数据
    //  state中的数据一旦发生变化,视图也自动更新页面状态
    state: {
        msg:2001
    },
    //  getters 你可以理解为组件的计算属性
    //  在getters 关联的state只要发生变化,getters会自动更新执行函数
    // getters 是一个函数,但一定要return表达式,我们把它当作变量来使用
    getters:{
        msg2:function(state){   
            return state.msg*100
        }
    },
    //  mutations: 直接的同步修改state,它是修改state的主要入口,不要粗暴的在组件里修改
    //  在组件中使用 this.$store.commi法,负载) 来触发mutations方法t(已定义的mutation方
    mutations:{
        // payload 负载 就是组件带过来的数据
        updateMsg(state,payload){
            state.msg += payload
        }
    },
    // actions: 间接的异步的修改state
    // actions里面的方法都是异步,比如调接口,定时器等
    // 在actions也是可以直接修改state,他要是vueX与后端接口交互的唯一入口,但是这样做,在devtools没有修改的记录,非常不便于测试
    // Vuex官方特别建议,只用 mutations来修改 state的数据,不建议使用action来修改state
    actions:{
        asynsUpdateMsg(store,payload){
            setInterval(()=>{
                // 在组件中
                // this.$store.commit('updateMsg',payload)
                
                // 在action中,提交一个 mutations方法
                store.commit('updateMsg',payload)
            },1000)
        }
    }
})


export default store