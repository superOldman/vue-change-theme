<template>
  <div class="hello">
    13213
    <div class="a item-0">3333333333333333333</div>
    <el-button type="primary" @click="clickhandle">oooo</el-button>
  </div>  
</template>

<script>
import client from "webpack-theme-color-replacer/client";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    clickhandle(){
      client.changer.changeColor({ newColors: ['#69af23'] })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #9564ca;
.item-0 {
  background: $color; 
}
.hello{
  color: var(--color);
  
  .a{
    color: aqua;
  }
}
</style>
