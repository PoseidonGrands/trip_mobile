<template>
  <Home />
</template>

<style>
@import './assets/style/common.less';
</style>

<script>
import Home from './views/Home.vue'
  export default{
    components:{
      Home
    },
    methods: {
      customFilter(data){
        return data.toUpperCase()
      }
    }
  }

</script>