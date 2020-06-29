<template>
  <div class="home">
    <div>
      <h1>2002</h1>
    </div>
    <h1>2001</h1>
    <TabBar></TabBar>
  </div>
  
</template>
<script>

export default {
  name:"Home",
  components:{
    TabBar:()=>import ("@/components/common/TabBar.vue")
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/common.scss";
.home{
  &>h1{
    color: $getColor;
  }
}
</style>