//  每一个子modules 实际上就是一个普通的json对象,可以包括 state,gtters,mutations,actions,这些选项
const studyModule = {
    // 开启子模块的命名空间
    // 这个namespace 一定要开启,否则在组件中使用 ...map 系列的api进行映射时会报错
    namespaced:true,
        state: {
            msg:2001
        },
        getters:{
            msg2:function(state){   
                return state.msg*100
            }
        },
    
        mutations:{
            updateMsg(state,payload){
                state.msg += payload.count
            }
        },
        actions:{
            asynsUpdateMsg(store,payload){
                setInterval(()=>{
                    store.commit('updateMsg', payload)
                },1000)
            }
        }

}

export default studyModule