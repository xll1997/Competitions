<!-- 
  * @Descripttion: 2021-01-19
  * @version:
  * @Date: 登录页面主战场 -- 更多->比赛公告
  -->
<template>
  <div class="notice">
    <div class="not">
      <i @click="close" class="isClose">X</i>
      <h2>
        <span class="iconfont icon-gonggao"></span>
        比赛公告
      </h2>
      <ul class="noticeUl">
        <li v-for="(item,index) in noticeDataList" :key="index" @click="noticeItem(item)">
          <em></em>
          <div class="out">
            <div class="top">
              <div>
                <p :class="{active: reg.test(item.title)}">{{item.title}}</p>
                <span v-if="item.top == 1">[ 置顶 ]</span>
              </div>
              <i>{{item.time}}</i>
            </div>
            <div class="con">{{item.con}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    noticeDataList: Array
  },
  data() {
    return {
      reg: RegExp(/禁赛/)
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.mask()
  },
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('noticeStatus', false)
    }
  }
}
</script>

<style lang="less" scoped>
.notice {
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
  .not {
    position: relative;
    // left: 150px;
    // bottom: 140px;
    width: 923px;
    height: 600px;
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
      font-size: 24px;
      span {
        margin-right: 12px;
      }
    }
    .noticeUl {
      // padding: 0px 20px 0px 20px;
      margin-top: 30px;
      height: 470px;
      overflow-y: auto;
      box-sizing: border-box;
      li {
        list-style: circle;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        // flex-direction: column;
        padding-bottom: 45px;
        font-size: 18px;
        cursor: pointer;
        em {
          width: 7px;
          height: 7px;
          margin-top: 10px;
          border: 1px solid #fff;
          border-radius: 50%;
        }
        .out {
          width: 97%;
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
              width: 80%;
              display: flex;
              align-items: center;
              p {
                // float: left;
                display: inline-block;
                // width: 80%;
                overflow: hidden; //超出部分隐藏
                text-overflow: ellipsis; //超出部分显示...
                white-space: nowrap; //文本强制一行显示
              }
              span {
                display: inline-block;
                padding-left: 20px;
                color: #fe0000;
              }
            }

            i {
              width: 15%;
              display: inline-block;
              text-align: right;
            }
            .active {
              color: #ffa200;
            }
          }
          .con {
            padding-top: 15px;
          }
        }
      }

      /* 修改滚动条样式 */
      &::-webkit-scrollbar {
        width: 5px;
        // margin-left: 10px;
      }

      /* 修改 滚动条的 下面 的 样式 */
      &::-webkit-scrollbar-track {
        background-color: #eee;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
      }

      /* 修改 滑块 */
      &::-webkit-scrollbar-thumb {
        background-color: #aaa;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
      }
    }
  }
}
</style>
