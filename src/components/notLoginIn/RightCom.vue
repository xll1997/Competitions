<!-- 
  * @Descripttion: 2021-01-14
  * @version:
  * @Date: 得分规则、解题动态
  -->
<template>
  <div class="right" :style="frBg">
    <h2>
      <img src="@/assets/img/not_login/not_login_one/dooted.png" alt />
      <span>{{title}}</span>
    </h2>
    <div class="con">
      <!-- 得分规则 -->
      <div class="haveScore" v-if="title == '得分规则'">
        <p>
          本次大赛共设置多个类别题目，需要找到Flag，并上传WP，最终得分
          由FLag得分共同组成。本次大赛共设置多个类别题目，需要找到Flag，并
          上传WP。本次大赛共设置多个类别题目，需要找到Flag，并上传WP，最
          终得分由FLag得分共同组成。
        </p>
        <p>
          本次大赛共设置多个类别题目，需要找到Flag，并上传WP，最终得分
          由FLag得分共同组成。本次大赛共设置多个类别题目，需要找到Flag，并
          上传WP。本次大赛共设置多个类别题目，需要找到Flag，并上传WP，最
          终得分由FLag得分共同组成
        </p>
        <p>祝各战队斩获好成绩！</p>
        <p class="red">特别注意：若某某条件，将被立即禁赛！</p>
        <p>第七届工控大赛组委会</p>
      </div>
      <!-- 解题动态 -->
      <div class="dynamic" v-else>
        <ul class="notAns">
          <li v-for="(item,index) in dynamicData.notAnswered" :key="index">
            <i>!</i>
            <span>{{item}}</span>
          </li>
        </ul>
        <!-- 动态 -->
        <a-timeline class="timeLine">
          <a-timeline-item color="gray" v-for="(item,index) in dynamicData.answered" :key="index">
            <div class="clearfix">
              <p class="txt">
                <span class="blue">{{item.num}}</span>
                <span>-解出{{item.category}}类-{{item.vm}}，</span>
                <span :class="{red: item.text == '一血500分Get'}">{{item.text}}</span>
              </p>
              <p class="time">{{item.time}}</p>
            </div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String,
    dynamicData: Object
  },
  data() {
    return {
      frBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/fr_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.right {
  margin-top: 100px;
  // height: 690px;
  box-sizing: border-box;
  h2 {
    position: relative;
    height: 90px;
    img {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 65%;
      transform: translateY(-50%);
    }
    span {
      position: absolute;
      top: 50%;
      right: 22%;
      transform: translateY(-50%);
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
  }

  .con {
    // background-color: #f00;
    padding: 40px 50px 50px;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 36px;
    letter-spacing: 1px;

    // 得分规则
    .haveScore {
      p:nth-child(1),
      p:nth-child(2) {
        text-indent: 2rem;
      }
      .red {
        color: #ff0000;
      }
      p:last-child {
        text-align: right;
      }
    }
    // 解题动态
    .dynamic {
      color: #fff;
      font-size: 14px;
      // 未解出
      .notAns {
        color: #ff7800;
        
        li {
          font-size: 14px;
          i {
          display: inline-block;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin-right: 10px;
          line-height: 10px;
          color: #fff;
          text-align: center;
          font-size: 9px;
          background-color: #ff7800;
        }
        }
      }

      // 动态
      .timeLine {
        max-height: 434px;
        padding-top: 10px;
        overflow-y: auto;
        /* 修改滚动条样式 */
        &::-webkit-scrollbar {
          width: 5px;
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
          background-color: #bbb;
          -webkit-border-radius: 2em;
          -moz-border-radius: 2em;
          border-radius: 2em;
        }
        /deep/.ant-timeline-item-content {
          color: #fff;
          div {
            width: 100%;
            // padding-left: 10px;
            display: flex;
            justify-content: space-between;
            p {
              display: inline-block;
              width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              span {
                font-size: 14px;
              }
              .blue {
                color: #00fff2;
              }
            }
            .time {
              width: 20%;
              text-align: right;
            }
            .red {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
}
</style>
