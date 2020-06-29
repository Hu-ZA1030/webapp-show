<template>
    <div>
        <h1>商品详情</h1>
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type:String,
            required:true
        }
    },
    data:function(){
        return{}
    },
    mounted() {
      var id =  this.$route.params.id
      console.log(id)
    }
    
}
</script>
<style>

</style>