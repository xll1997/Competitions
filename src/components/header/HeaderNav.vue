 <!-- 
  * @Descripttion: 2021-01-13
  * @version:
  * @Date: 头部导航
  -->
<template>
  <div class="header clearfix">
    <div class="fl">
      <div class="gameNum" :style="backgroundDiv" @click="go('/index')">
        <h2>第七届</h2>
      </div>
      <div class="title">
        <p>
          <img src="@/assets/img/not_login/not_login_one/trophy.png" alt />
          <i>“某某某某某某杯”</i>
        </p>
        <p>
          <i>全国工控系统信息安全攻防竞赛</i>
        </p>
      </div>
      <div class="cl">
        <img src="@/assets/img/not_login/not_login_one/cl.png" alt />
      </div>
    </div>
    <div class="fr">
      <ul>
        <li v-for="(item,index) in navList" :key="index" @click="go(item.Url,index)">
          <b>{{item.name}}</b>
          <img v-show="item.Url == $route.path" src="@/assets/img/main_battlefield/nav_bg.png" alt />
        </li>
        <li>
          <p @click="infoClick">
            张三
            <i v-show="infoIsShow">{{newsDataList.length}}</i>
            <span class="iconfont icon-xiala1"></span>
          </p>
          <div class="ownInfo" v-show="ownIsShow">
            <p @click="myNews">我的消息</p>
            <p @click="out">退出系统</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 我的消息 -->
    <MyNews :newsDataList="newsDataList" v-if="myNewsIsShow" @myNewsStatus="myNewsStatus" />
    <!-- 退出系统 -->
    <Out v-if="outStatus" @outStatusIs="outStatusIs"/>
  </div>
</template>

<script>
import MyNews from './MyNews'
import Out from './Out'
export default {
  components: {
    MyNews,
    Out
  },
  data() {
    return {
      navIndex: '-1',
      backgroundDiv: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/title_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 是否显示下拉
      ownIsShow: false,
      // 小点点消息提示
      infoIsShow: true,
      // 我的消息数据
      newsDataList: [
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '1',
          time: '10：29'
        },
        {
          title: '您因为犯规，被禁赛！',
          con:
            'xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！',
          // top: '1',
          time: '10：29'
        },
        {
          title: '五道新题已放出',
          con:
            '五道新题已放出五道新题已放出五道新题已放出五道新题已放出五道新题已放出',
          // top: '1',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          // top: '0',
          time: '10：29'
        }
      ],
      // 我的消息显示
      myNewsIsShow: false,
      navList: [
        {
          name: '总榜',
          Url: '/generalList/0'
        },
        {
          name: '个人榜',
          Url: '/generalList/1'
        },
        {
          name: '题榜',
          Url: '/generalList/2'
        },
        {
          name: '赛事指南',
          Url: '/guide'
        }
      ],
      outStatus: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.newsDataList.length > 0
      ? (this.infoIsShow = true)
      : (this.infoIsShow = false)
  },
  methods: {
    // 个人信息点击
    infoClick() {
      // this.infoIsShow = false
      this.ownIsShow == true
        ? (this.ownIsShow = false)
        : (this.ownIsShow = true)
    },
    // 我的消息
    myNews() {
      this.infoIsShow = false
      this.ownIsShow = false
      this.myNewsIsShow = true
    },
    // 我的消息关闭状态
    myNewsStatus(data) {
      this.myNewsIsShow = false
    },
    // 退出系统
    out() {
      this.ownIsShow = false
      this.outStatus = true
    },
    // 导航
    go(url, index) {
      this.navIndex = index
      this.$router.push({
        path: `${url}`
      })
    },
    // 退出系统
    outStatusIs(data) {
      this.outStatus = data
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  z-index: 80;
  width: 100%;
  padding: 40px 47px 0;
  box-sizing: border-box;
  height: 166px;
  // line-height: 166px;
  color: #ffffff;
  background-image: linear-gradient(
    90deg,
    rgba(10, 24, 69, 0.7) 0%,
    rgba(25, 34, 98, 0.7) 26%,
    rgba(39, 44, 126, 0.7) 53%,
    rgba(10, 24, 69, 0.7) 100%
  );
  .fl {
    position: absolute;
    left: 47px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;

    .gameNum h2,
    .title i {
      font-family: fzcch;
      transform: skew(-10deg, 0);
    }
    .gameNum {
      width: 216px;
      height: 87px;
      text-align: center;
      line-height: 87px;
      cursor: pointer;
      h2 {
        font-size: 50px;
        // font-weight: 900;
        // 颜色渐变
        background-image: linear-gradient(
          to right,
          #aca6e9,
          #fefefb,
          #aca6e9
        ); //最后三行为文字渐变CSS
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .title {
      z-index: 8;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        transform: skew(-10deg, 0);
        // font-weight: 900;
        &:nth-child(1) {
          font-size: 35px;
          // 颜色渐变
          background-image: linear-gradient(
            to right,
            #aca6e9,
            #fefefb,
            #aca6e9
          ); //最后三行为文字渐变CSS
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          img {
            height: 41px;
          }
        }
        &:nth-child(2) {
          font-size: 24px;
          i {
            text-shadow: 0 -2px 10px #0060ff;
          }
        }
      }
    }
    .cl {
      position: absolute;
      right: -30px;
      top: -40px;
      z-index: 0;
      img {
        height: 166px;
      }
    }
  }
  .fr {
    width: 35%;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    ul {
      display: flex;
      justify-content: space-between;
      li {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
        // margin-right: 75px;
        font-weight: 200;
        cursor: pointer;
        b {
          flex: 1;
        }
        img {
          // width: 40%;
          flex: 1;
        }
        p {
          flex: 1;
          position: relative;
          height: 20px;
          padding-bottom: 10px;
          span {
            font-size: 12px;
            padding-left: 10px;
          }
          i {
            position: absolute;
            left: 30px;
            width: 12px;
            height: 12px;
            text-align: center;
            line-height: 12px;
            font-size: 12px;
            color: #ffffff;
            display: inline-block;
            border-radius: 50%;
            background-color: #f00;
          }
        }

        .ownInfo {
          position: absolute;
          left: 0;
          top: 30px;
          width: 120px;
          padding: 10px 0;
          z-index: 99;
          border-radius: 2px;
          font-size: 16px;
          text-align: center;
          // background-color: rgba(00,00,00,0.2);
          background-color: #191652;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          p {
            height: 30px;
            line-height: 30px;
          }
          p:hover {
            color: #ffa200;
          }
        }
      }
    }

    // li:last-child {
    //   margin-right: 0;
    // }
  }
}
</style>
