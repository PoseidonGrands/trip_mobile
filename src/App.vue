<template>
  <Home />
</template>

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