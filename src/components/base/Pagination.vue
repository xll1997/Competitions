 <!-- 
  * @Descripttion: 2021-01-22
  * @version:
  * @Date: 总榜/个人榜 -- 分页
  -->
<template>
  <div class="pagin">
  
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleButtonClick(e) {
      console.log('click left button', e)
    },
    handleMenuClick(e) {
      console.log('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-btn {
  background-color: #1a1c59;
  color: #fff;
}
/deep/.ant-dropdown {
  background-color: #1a1c59;
  /deep/.ant-dropdown-menu {
    background-color: #1a1c59;
    color: #fff;
  }
}
</style>
