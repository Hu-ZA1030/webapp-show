//  引入 VUe
import Vue from "vue"
import VueRouter from "vue-router"
// 注册 路由
Vue.use(VueRouter)

// 引入三个页面组件
// import home from './pages/home.vue'
// import find from './pages/find.vue'
// import user from './pages/user.vue'
// import detail from './pages/detail.vue'
// import good from  '@/components/find/good.vue'
// import price from  '@/components/find/price.vue'
// 使用路由懒加载
const Home = ()=>import('./pages/home.vue') 
const find  = ()=>import('./pages/find.vue') 
const user  = ()=>import('./pages/user.vue') 
const cart  = ()=>import('./pages/cart.vue') 
const detail  = ()=>import('./pages/detail.vue') 
const good  = ()=>import('@/components/find/good.vue')  
const price  = ()=>import('@/components/find/price.vue') 


// import A from "./components/A.vue"
// import B from "./components/B.vue"
// import C from "./components/C.vue"

let router = new VueRouter({
    mode:"hash",
    // 在url地址栏上有一个#，有#就是Hash路由，没有就是history路由
    //  history缺点：
    routes:[
        // {path:"/index",components:{aaa:A,bbb:B,ccc:C},redirect:"/home"},
        //二级路由不需要加斜杠
        {path: "/home", alias:'/x',name:"home1",component:Home},
        {path:"/cart",component:cart},
        { path: "/find", 
          component:find,
          children:[
              {path:"good",component:good},
              {path:"price",component:price},
              {path:"",redirect:"/find/good"},// 重定向，我们直接进入就默认打开good
          ]
         
        },
        
        {path: "/user", component:user},
        //  路由： 定义一组路径 - 组件 的显示的关系
        //  使用 别名 alias  和 /home 效果一样，也是可以跳转
        //  命名路由： 给路径组件的匹配关系取名字：
        //      home1 是 /home 与 component中的home一一对应关系叫home1
        //  在 <router-link> to属性使用 name <router-link :to="{name:'home1'}">
        //  重定向： 当访问某一路径时，自动跳转到另一个路径
        //  redirect:"": 上面的代码进入根路径，重定向 跳转到 /home
        
        // 动态路由： 冒号后面的id是一个变量，最终可以在thi.$route.params.id获取
        // 路由传参：两种方式：第一种：使用thi.$route.params.id获取，
                           // 第二种：props开启路由传参，并且允许接受参数的那个组件使用props属性来接收
        {path:"/detail/:id",component:detail,props:true}
    ]
})

// 全局路由守卫,他会拦截所有的路由
router.beforeEach((to,from,next)=>{
    console.log(to)
    console.log(from)
    // 只拦截 购物车组件的路由跳转行为
    // 当我们没有登入的时候,它会拦截我们进入购物车组件,直接跳转到"/user"组件
    // if(to.fullPath == "/cart"){
    //     let isLogin = true
    //     if(isLogin){
    //         next()
    //     }else{
    //         next("/user")
    //     }
    // }else{
    //     next()
    // }
    let isLogin = false
    to.fullPath == "/cart"?(isLogin? next():next("/user")):next()
})


// 将 router 抛出去
export default router