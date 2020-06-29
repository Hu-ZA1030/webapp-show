<template>
  <div class="app">
    
    <router-view></router-view>

   
  </div>
</template>

<script>

export default {
  name: 'App',
  // 侦听器可以监听路由的变化
  watch:{
    $route:function(to,from){
      console.log("watch",to,from)
    }
  },
  components: {
   
  },
  mounted(){
    console.log("路由",this.$router)
    console.log("路由",this.$route)
    console.log("vuex",this.$store)
    console.log("vuex-mutations",this.$store.mutations)
  },
  methods:{
   
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: #ccc;
}
.app {
  width: 100%;
  height: 100%;
  background: pink;
  position: relative;
}
.tabs{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span{
  flex: 1;
  font-size: 14px;
  border: 1px solid #cccccc;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.on{
  color:red;
}
</style>
