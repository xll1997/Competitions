<!-- 
  * @Descripttion: 2021-01-20
  * @version:
  * @Date: 登录页面主战场 -- 点击提交flag
  -->
<template>
  <div class="total">
    <div class="survey">
      <!-- <i @click="close" class="isClose">X</i> -->
      <h2>
        <span></span>
        请填写flag
      </h2>
      <p>
        <!-- <a-input placeholder="input with clear icon" allow-clear @change="onChange" /> -->
        <a-textarea placeholder="请填写flag..." allow-clear @change="onChange" v-model="flag"/>
      </p>
      <div>
        <span @click="close">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    flagData: Object
  },
  data() {
    return {
      flag: ''
    }
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
      this.$emit('flagStatus', false)
      // this.flag = 
      console.log('this.flag',this.flag)
    },
     onChange(e) {
      console.log('e',e);
      // this.flag = e
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

    p {
      padding: 40px 0;
      font-size: 20px;
      text-align: center;
      /deep/.ant-input {
        background-color: rgba(255,255,255,0.5);
      }
    }

    div {
      text-align: center;
      span {
        display: inline-block;
        width: 150px;
        height: 30px;
        border-radius: 10px;
        line-height: 30px;
        background-color: rgba(255, 255, 255, 0.7);
        color: #333;
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
