<!-- 
  * @Descripttion: 2021-01-20
  * @version:
  * @Date: 登录页面主战场 -- 退出系统
  -->
<template>
  <div class="total">
    <div class="survey">
      <i @click="close" class="isClose">X</i>
      <h2>
        <span></span>
        退出系统
      </h2>
      <div class="uploadDiv">
        <p>距离比赛结束还剩3小时25分钟,</p>
        <p>确定退出系统？</p>
      </div>
      <div>
        <span @click="ok">确定</span>
        <span @click="close">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    WPData: Object
  },
  data() {
    return {
      UploadUrl: '',
      UploadName: ''
    }
  },
  computed: {},
  watch: {},
  created() {
    this.mask()
  },
  mounted() {
    console.log('WPData', this.WPData)
  },
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('outStatusIs', false)
      this.$message.warning('您已取消退出系统！！');
    },
    ok() {
        document.body.style.overflow = 'auto'
        this.$emit('outStatusIs', false)
        this.$message.success('您退出系统成功！！');
    },
  }
}
</script>

<style lang="less" scoped>
.total {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .survey {
    position: relative;
    // left: 150px;
    // bottom: 140px;
    width: 450px;
    // height: 336px;
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
      // padding-bottom: 23px;
      span {
        display: inline-block;
        width: 3px;
        height: 17px;
        background-color: #44a7fc;
        margin-right: 15px;
      }
    }

    .uploadDiv {
      padding: 40px 0;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
    }

    div {
      text-align: center;
      span {
        display: inline-block;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        line-height: 30px;
        background-color: rgba(255, 255, 255, 0.7);
        color: #333;
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
        &:nth-child(2) {
          background-color: rgba(255, 162, 0, 0.7);
          color: #fff;
          margin-left: 20px;
        }
        &:nth-child(2):hover {
          background-color: rgba(255, 162, 0, 1);
        }
      }
    }
  }
}
</style>
