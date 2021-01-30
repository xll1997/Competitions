<!-- 
  * @Descripttion: 2021-01-29
  * @version:
  * @Date: 赛事指南 -- 标题
  -->
<template>
  <div class="title">
    <div>
      <img src="@/assets/img/not_login/not_login_one/dooted.png" alt />
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 45px;
  margin-bottom: 30px;
  div {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    width: 324px;
    line-height: 45px;
    // background-color: #f00;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 36px;
    }
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 11px;
    }
  }
}
</style>
