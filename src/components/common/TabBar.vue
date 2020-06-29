<template>
   <van-tabbar route active-color="#f53515" fixed>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/find" dot>发现</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/cart" badge="5">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import {TabBar,TabbarItem} from "vant"
export default {
    components:{
        //  [TabBar.name] 相当于 van-tabbar
        [TabBar.name]:TabBar,
        [TabbarItem.name]:TabbarItem
    },
    mounted(){
        console.log("00",TabBar);
       
    }
   
};
</script>
<style lang="scss" scoped>
</style>