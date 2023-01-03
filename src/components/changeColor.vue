<template>
  <el-color-picker v-model="mainColor" size="small" @change="changeColor">
  </el-color-picker>
</template>
<script>
import { changeThemeColor, curColor } from '@/utils/themeColorClient'
// import { message } from '@/utils/message'
export default {
  data() {
    return {
      color: '#138C35',
      mainColor: curColor
    }
  },
  methods: {
    changeColor(newColor) {
      this.$emit('theme-color', newColor)
      changeThemeColor(newColor).then(() => {
        this.$message.success('主题色切换成功啦~')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-color-picker {
  margin: 0 20px;
}
</style>