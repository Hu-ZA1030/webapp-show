<template>
    <div>
        <h1>发现<span v-text="msg"></span></h1>
        <h1 v-text="msg2"></h1>
        <div class="tabs2">
           <router-link to="/find/good" tag="span" active-class="on">发现好货</router-link>
           <router-link to="/find/price" tag="span" active-class="on">发现优惠</router-link>
        </div>
        <!-- 这是二级路由的位置 -->
        <router-view></router-view>
    </div>
</template>
<script>
// 映射
//  mapState的作用是把Vuex中state数据映射进去
//  在计算属性  ...mapState([]) 然后通过this.进行访问
//  mapAction 用于映射Vuex中的 actives 方法,在methods选项中进行映射,然后this. 访问
//  mapMutations 用于映射Vuex中的 mutations 方法,在methods选项中进行映射,然后this. 访问
import {mapState ,mapMutations , mapActions , mapGetters} from "vuex"
export default {
    name:"find",
    computed:{
        ...mapState("study",["msg"]),
        ...mapGetters("study",["msg2"])
    },
    mounted(){
        console.log('map',this.msg)
        
    },
    methods:{
       ...mapActions("study",["updateMsg"]),
       ...mapMutations("study",['asynsUpdateMsg']),
        
    }
    
}
</script>
<style>
    .tabs2{
        display: flex;
    }
    .tabs2>span{
        flex: 1;
        border: 1px solid #000;
        line-height: 35px;
        text-align: center;
        cursor: pointer;
    }
    h1{
        color: red;
        text-align: center;
        margin: 0;
    }
    .on{
        color: white
    }
</style>