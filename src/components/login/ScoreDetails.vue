<!-- 
  * @Descripttion: 2021-01-20
  * @version:
  * @Date: 登录页面主战场 -- 得分详情
  -->
<template>
  <div class="total">
    <div class="survey">
      <i @click="close" class="isClose">X</i>
      <h2>
        <span></span>
        得分详情 - {{scoreDetailData.name}}
      </h2>
      <table>
        <tr>
          <td>解题数</td>
          <td>{{scoreDetailData.solvedNum}}</td>
          <td>{{scoreDetailData.score}}分</td>
        </tr>
        <tr>
          <td>一血类</td>
          <td>{{scoreDetailData.firstBlood}}</td>
          <td>{{scoreDetailData.firstBloodScore}}分</td>
        </tr>
        <tr v-for="(item,index) in scoreDetailData.tips" :key="index">
          <td>{{item.name}}</td>
          <td
            :class="{red: item.status == 1 ? false : true, green: item.status == 1 ? true : false}"
          >
            <a-icon type="check" v-if="item.status == 1" two-tone-color="#ff0000" />
            <a-icon type="close" v-if="item.status == 0" two-tone-color="#1AFB29" />
          </td>
          <td
            :class="{red: item.status == 1 ? false : true, green: item.status == 1 ? true : false}"
          >{{item.score}}分</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    scoreDetailData: Object
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.mask()
    console.log(this.scoreDetailData)
  },
  mounted() {},
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('scoreDetailsStatus', false)
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .survey {
    position: relative;
    // left: 150px;
    // bottom: 140px;
    width: 417px;
    // height: 446px;
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
        .red {
          color: #f00;
        }
        .green {
          color: #1afb29;
        }
      }
    }
  }
}
</style>
