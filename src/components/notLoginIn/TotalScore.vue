<!-- 
  * @Descripttion: 2021-01-14
  * @version:
  * @Date: 总分排名
  -->
<template>
  <div class="totalScore" :style="totalScoreBg">
    <h2>
      <img src="@/assets/img/not_login/not_login_one/dooted.png" alt />
      <span>总分排名</span>
    </h2>
    <div class="con">
      <div class="topThree">
        <!-- 前三 -->
        <!-- 亚军 -->
        <ul :style="backgroundSecond">
          <li>{{ totalScoreData[1].num }}</li>
          <li>{{ totalScoreData[1].name }}</li>
          <li>{{ totalScoreData[1].score }}</li>
          <li v-show="totalScoreData[1].firstBlood != 0">
            {{ totalScoreData[1].firstBlood }}
            <img src="@/assets/img/not_login/not_login_two/blood.png" alt />
          </li>
        </ul>
        <!-- 冠军 -->
        <ul :style="backgroundFirst">
          <li>{{ totalScoreData[0].num }}</li>
          <li>{{ totalScoreData[0].name }}</li>
          <li>{{ totalScoreData[0].score }}</li>
          <li v-show="totalScoreData[0].firstBlood != 0">
            {{ totalScoreData[0].firstBlood }}
            <img src="@/assets/img/not_login/not_login_two/blood.png" alt />
          </li>
        </ul>
        <!-- 季军 -->
        <ul :style="backgroundThird">
          <li>{{ totalScoreData[2].num }}</li>
          <li>{{ totalScoreData[2].name }}</li>
          <li>{{ totalScoreData[2].score }}</li>
          <li v-show="totalScoreData[2].firstBlood != 0">
            {{ totalScoreData[2].firstBlood }}
            <img src="@/assets/img/not_login/not_login_two/blood.png" alt />
          </li>
        </ul>
      </div>
      <!-- 前十 -->
      <table>
        <tr v-for="(item, index) in totalScoreData.slice(3)" :key="index">
          <td>{{ item.ranking }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.name }}</td>
          <td>
            {{ item.score }}
            <!-- <span v-if="item.firstBlood != 0">
                {{item.firstBlood}}
                <img src="@/assets/img/not_login/not_login_two/blood.png" alt />
          </span>-->
          </td>
          <td>
            <span v-if="item.firstBlood != 0">
              {{ item.firstBlood }}
              <img src="@/assets/img/not_login/not_login_two/blood.png" alt />
            </span>
          </td>
        </tr>
      </table>
    </div>
    <!-- 实时排名 -->
    <div class="nowTime">
      <span>
        更多实时排名
        <i class="iconfont icon-moreinfo-copy"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    totalScoreData: Array
  },
  data() {
    return {
      // 总分排名背景
      totalScoreBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/total_score_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 冠军背景图
      backgroundFirst: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/one.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 亚军背景图
      backgroundSecond: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/two.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 季军背景图
      backgroundThird: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/three.png') +
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
.totalScore {
  // flex: 1;
  margin-top: 100px;
  // height: 690px;
  // padding: 0 32px;
  box-sizing: border-box;
  .con {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    position: relative;
    height: 90px;
    img {
      position: absolute;
      top: 50%;
      left: 20px;
      width: 65%;
      transform: translateY(-50%);
    }
    span {
      position: absolute;
      top: 50%;
      left: 34%;
      transform: translate(-40%, -50%);
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
  }
  .topThree {
    display: flex;
    justify-content: space-between;
    // margin: 0 52px;
    width: 85%;
    height: 188px;
    // background-color: #f00;
    ul {
      align-self: center;
      width: 79px;
      height: 143px;
      padding-top: 55px;
      box-sizing: border-box;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      color: #502500;
      li:last-child {
        width: 31px;
        height: 18px;
        margin: 0 auto;
        border: 1px solid #701818;
        border-radius: 2px;
        color: #701818;
        line-height: 18px;
      }
    }
    ul:nth-child(2) {
      width: 103px;
      height: 188px;
      padding-top: 70px;
      font-size: 14px;
      line-height: 24px;
    }
  }
  table {
    width: 85%;
    // margin: 20px 52px;
    box-sizing: border-box;
    tr {
      width: 100%;
      height: 40px;
      line-height: 40px;
      td {
        text-align: center;
        font-size: 14px;
        &:nth-child(1) {
          width: 10%;
          color: #b5caff;
          transform: skew(-15deg, 0);
        }
        &:nth-child(2) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 35%;
        }
        &:nth-child(4) {
          width: 20%;
          text-align: right;
        }
        &:nth-child(5) {
          width: 15%;
          span {
            // margin-left: 5px;
            padding: 0 5px;
            border: 1px solid #701818;
            border-radius: 2px;
            color: #701818;
          }
        }
      }
      &:nth-child(2n - 1) {
        background-image: linear-gradient(90deg, #203caa 0%, #2472b4 100%);
      }
    }
  }
  .nowTime {
    text-decoration: underline;
    padding-right: 40px;
    padding: 20px 40px 50px 0;
    text-align: right;
    cursor: pointer;
  }
}
</style>
