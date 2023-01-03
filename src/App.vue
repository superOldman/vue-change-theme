<template>
  <div id="app" :style="{'--color': themeColor}">
    <changeColor @theme-color="changeColor" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import changeColor from '@/components/changeColor'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    changeColor,
    HelloWorld
  },
  data() {
    return {
      themeColor: 'blue',
    }
  },
  mounted() {
    console.log(build_time);
    sessionStorage.theme_color && this.changeColor(sessionStorage.theme_color)


  },
  methods: {
    changeColor(val) {
      this.themeColor = val
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
