<template>
  <div id="foo">
     <h1>{{ msg }}</h1>   
    <router-link tag="button" :to="'/'">home</router-link>
  </div>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Welcome to Foo vue'
    }
  }
};
</script>

