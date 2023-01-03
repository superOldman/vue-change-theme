<template>
  <div class="hello">
    13213
    <div class="a item-0">3333333333333333333</div>
    <el-button type="primary">oooo</el-button>
    <el-tag>标签一</el-tag>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  color: var(--color);

}
</style>
