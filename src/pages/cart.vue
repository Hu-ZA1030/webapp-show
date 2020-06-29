<template>
    <div>购物车</div>
</template>
<script>
export default {
    // 使用局部路由守卫,路由钩子函数
    // 路由钩子:由vue-route 给的,路由开始进入之前
    //  next() 表示允许通过,否则就是会被拦截
    //当我们没有登入isLogin为false时,我们就会拦截不让进入购物车页面,直接跳转到 "/user" 页面
    //当我们的登入成功 为 true,就进行下一步,
    // beforeRouteEnter(to,from,next){
    //     console.log("to",to)
    //     console.log("from",from)
    //     let isLogin = true
    //     if(isLogin){
    //         next()
    //     }else{
    //         next("/user")
    //     }
      
    // }
}
</script>
<style>

</style>