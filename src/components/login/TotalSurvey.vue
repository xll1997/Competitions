<!-- 
  * @Descripttion: 2021-01-19
  * @version:
  * @Date: 登录页面主战场 -- 总分概况
  -->
<template>
  <div class="total">
    <div class="survey">
      <i @click="close" class="isClose">X</i>
      <h2>
        <span></span> 总分概况
      </h2>
      <table>
        <tr>
          <td>解题数</td>
          <td>{{navData.totalScore.tipsNum}}</td>
          <td>{{navData.totalScore.score}}分</td>
        </tr>
        <tr>
          <td>一血类</td>
          <td>{{navData.firstBlood.tipsNum}}</td>
          <td>{{navData.firstBlood.score}}分</td>
        </tr>
        <tr v-for="(item,index) in navData.navTabDataList" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.tipsNum}}</td>
          <td>{{item.score}}分</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    navData: Object
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.mask()
  },
  mounted() {},
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('totalStatus',false)
    }
  }
}
</script>

<style lang="less" scoped>
.total {
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  .survey {
    position: absolute;
    left: 150px;
    bottom: 140px;
    width: 417px;
    height: 446px;
    padding: 35px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    background-color: #191652;
    color: #fff;
    .isClose {
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      text-align: center;
      line-height: 18px;
      font-weight: 800;
      color: #191652;
      background-color: #fff;
      cursor: pointer;
    }
    h2 {
      color: #fff;
      font-size: 18px;
      padding-bottom: 23px;
      span {
        display: inline-block;
        width: 3px;
        height: 17px;
        background-color: #44a7fc;
        margin-right: 15px;
      }
    }
    table {
      width: 100%;
      // height: 100%;
      tr {
        width: 100%;
        td {
          height: 48px;
          border: 1px solid #191652;
          font-size: 18px;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
}
</style>
