<template>
  <div id="home">
     <h1>{{ msg }}</h1>   
    <router-link tag="button" :to="'/foo'">foo</router-link>
  </div>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Welcome to Home vue'
    }
  }
};
</script>

