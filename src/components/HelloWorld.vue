<template>
  <div>
    <span>测试</span>
    <el-button type="primary" size="default" @click="click">测试</el-button>
    <el-input style="width: 220px;" v-model="input" placeholder="" clearable @change="change"></el-input>

  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      input: '22'
    }
  },
  methods: {
    click() {
       this.$message({
        message: '你好呀',
        type: 'info',
        showClose: true,
        duration: 3000,
      });
    },
    change() {
     

    }
  }

}
</script>
<style scoped>
</style>