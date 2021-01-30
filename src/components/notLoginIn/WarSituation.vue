<!-- 
  * @Descripttion: 2021-01-14
  * @version:
  * @Date: 战况
  -->
<template>
  <div class="situation">
    <!-- 时间 -->
    <div class="time">
      <!-- 开赛前 -->
      <div v-if="status == 0" class="again">
        距离开赛还有
        <span>{{ timeData.day }}</span>
        天
        <span>{{ timeData.hr }}</span>
        小时
        <span>{{ timeData.sec }}</span>
        分
      </div>
      <!-- 比赛中 -->
      <div v-if="status == 1" class="now" :style="backgroundTime">
        {{ numTime.myHours }}:{{ numTime.myMinutes }}:{{ numTime.mySeconds }}
      </div>
      <!-- 比赛结束 -->
      <div v-if="status == 2" class="gameOver" :style="backgroundTime">
        比赛已结束
      </div>
    </div>

    <!-- 战况 -->
    <div class="circle">
      <div class="top" :style="cenBg.top">
        <p>
          <span v-if="zkDataList.online.on != ''"
            >{{ zkDataList.online.on }}/{{ zkDataList.online.all }}</span
          >
          <span v-else>暂无数据</span>
        </p>
        <p>在线/战队总数</p>
      </div>
      <div class="cenLeft" :style="cenBg.cenFl">
        <p>
          <span v-if="zkDataList.subject.num != ''"
            >{{ zkDataList.subject.num }}/{{ zkDataList.subject.total }}</span
          >
          <span v-else>暂无数据</span>
        </p>
        <p>题目数/题目类别</p>
      </div>
      <div class="cenRight" :style="cenBg.cenFr">
        <p>
          <span v-if="zkDataList.cenLeft.on != ''"
            >{{ zkDataList.cenLeft.on }}/{{ zkDataList.cenLeft.all }}</span
          >
          <span v-else>暂无数据</span>
        </p>
        <p>在线/战队总数</p>
      </div>
      <div class="bottomLeft" :style="cenBg.bottomFl">
        <p>
          <span v-if="zkDataList.conquer.quer != ''"
            >{{ zkDataList.conquer.quer }}/{{ zkDataList.conquer.no }}</span
          >
          <span v-else>暂无数据</span>
        </p>
        <p>未攻克/已攻克</p>
      </div>
      <div class="bottomRight" :style="cenBg.bottomFr">
        <p>
          <span v-if="zkDataList.tips.tipsed != ''"
            >{{ zkDataList.tips.tipsed }}/{{ zkDataList.tips.total }}</span
          >
          <span v-else>暂无数据</span>
        </p>
        <p>已提示/题目总数</p>
      </div>
      <div class="center">
        <img
          v-if="status != 2"
          :src="zkDataList.sszkCenImg"
          alt
          class="conTxt"
        />
        <img v-else :src="zkDataList.lszkCenImg" alt class="conTxt" />
        <img src="@/assets/img/not_login/center/cen.png" alt class="conBg" />
        <img src="@/assets/img/not_login/center/lingt.png" alt class="light" />
      </div>
    </div>
    <!-- 登录 -->
    <div class="login">
      <p :style="backgroundLogin" @click="login">登录</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    status: String,
    zkDataList: Object
  },
  data() {
    return {
      backgroundTime: {
        backgroundImage:
          'url(' + require('../../assets/img/not_login/game_over.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      backgroundLogin: {
        backgroundImage:
          'url(' +
          require('../../assets/img/not_login/not_login_one/login.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 战况背景图
      cenBg: {
        top: {
          backgroundImage:
            'url(' + require('../../assets/img/not_login/center/top.png') + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        cenFl: {
          backgroundImage:
            'url(' +
            require('../../assets/img/not_login/center/centerfl.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        cenFr: {
          backgroundImage:
            'url(' +
            require('../../assets/img/not_login/center/cenfr.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        bottomFl: {
          backgroundImage:
            'url(' +
            require('../../assets/img/not_login/center/bottomfl.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        bottomFr: {
          backgroundImage:
            'url(' +
            require('../../assets/img/not_login/center/bottomfr.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }
      },
      // 倒计时
      timeData: {
        day: 0,
        hr: 0,
        min: 0,
        sec: 0
      },
      // 计时器
      numTime: {
        currentTime: 0,
        timeObj: null, // 时间对象,下方会用到
        myHours: '00', // 我定义来接收计算出来的 小时 的
        myMinutes: '00', // 我定义来接收计算出来的 分钟 的
        mySeconds: '00' // 我定义来接收计算出来的 秒钟 的
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.timer = setInterval(this.startTimer, 1000)
  },
  mounted() {
    this.getTime()
    this.testTimer()
  },
  methods: {
    // 倒计时
    getTime() {
      const end = Date.parse(new Date('2021-01-15'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt((msec / 1000 / 60 / 60) % 24)
      let min = parseInt((msec / 1000 / 60) % 60)
      let sec = parseInt((msec / 1000) % 60)
      this.timeData.day = day
      if (day < 0) {
        this.timeData.day = '00'
      } else {
        this.timeData.day = day > 9 ? day : '0' + day
      }
      if (hr < 0) {
        this.timeData.hr = '00'
      } else {
        this.timeData.hr = hr > 9 ? hr : '0' + hr
      }
      if (min < 0) {
        this.timeData.min = '00'
      } else {
        this.timeData.min = min > 9 ? min : '0' + min
      }
      if (sec < 0) {
        this.timeData.sec = '00'
      } else {
        this.timeData.sec = sec > 9 ? sec : '0' + sec
      }
      // console.log(`${this.day}天 ${this.hr }小时 ${this.min}分钟 ${this.sec}秒钟` )
      const that = this
      setTimeout(function() {
        that.getTime()
      }, 1000)
    },
    // 开启计时器
    testTimer() {
      // console.log('sdf')
      this.timeFunction()
      setInterval(() => {
        this.timeFunction()
      }, 1000)
    },
    // 计时器 计算时分秒
    timeFunction() {
      // 开始执行倒计时
      this.numTime.timeObj = {
        // 时间对象
        seconds: Math.floor(this.numTime.currentTime % 60),
        minutes: Math.floor(this.numTime.currentTime / 60) % 60,
        hours: Math.floor(this.numTime.currentTime / 60 / 60) % 24
      }
      // 计算出时分秒
      this.numTime.myHours =
        this.numTime.timeObj.hours < 10
          ? '0' + this.numTime.timeObj.hours
          : this.numTime.timeObj.hours
      this.numTime.myMinutes =
        this.numTime.timeObj.minutes < 10
          ? '0' + this.numTime.timeObj.minutes
          : this.numTime.timeObj.minutes
      this.numTime.mySeconds =
        this.numTime.timeObj.seconds < 10
          ? '0' + this.numTime.timeObj.seconds
          : this.numTime.timeObj.seconds
      this.numTime.currentTime++

      // console.log(
      //   this.numTime.myHours +
      //     ':' +
      //     this.numTime.myMinutes +
      //     ':' +
      //     this.numTime.mySeconds
      // )
    },
    // 点击登录
    login() {}
  }
}
</script>

<style lang="less" scoped>
.situation {
  // height: 100%;
  overflow: hidden;
  // background-color: #f00;
}
.time {
  padding-top: 40px;
  width: 100%;
  // height: 90px;
  text-align: center;
  font-size: 36px;

  .again span,
  .now {
    font-family: hy;
    color: #ff0000;
  }
  .gameOver,
  .now {
    height: 90px;
    line-height: 90px;
  }
}

.circle {
  width: 100%;
  // height: 100%;
  margin-top: 100px;
  // padding-bottom: 90px;
  position: relative;
  // background-color: #f00;
  .top,
  .cenLeft,
  .cenRight,
  .bottomLeft,
  .bottomRight {
    position: absolute;
    z-index: 10;
    p {
      font-size: 14px;
    }
  }
  .top {
    left: 50%;
    top: -18%;
    transform: translate(-40%, 10%);
    z-index: 10;
    width: 28%;
    height: 40%;
    max-width: 137px;
    max-height: 136px;
    text-align: center;
    p:first-child {
      padding-top: 22%;
    }
    p:last-child {
      padding-top: 8%;
    }
  }
  .cenLeft {
    width: 32%;
    height: 43%;
    max-width: 159px;
    max-height: 153px;
    left: 3%;
    top: 20%;
    transform: translate(0%, 10%);
    text-align: center;
    p:first-child {
      padding-top: 22%;
    }
    p:last-child {
      padding-top: 8%;
    }
  }
  .cenRight {
    width: 28%;
    height: 40%;
    max-width: 145px;
    max-height: 145px;
    right: 3%;
    top: 20%;
    text-align: center;
    p:first-child {
      padding-top: 22%;
    }
    p:last-child {
      padding-top: 8%;
    }
  }
  .bottomLeft {
    width: 28%;
    height: 40%;
    max-width: 141px;
    max-height: 139px;
    bottom: -15%;
    left: 15%;
    text-align: center;
    p:first-child {
      padding-top: 22%;
    }
    p:last-child {
      padding-top: 8%;
    }
  }
  .bottomRight {
    width: 32%;
    height: 43%;
    max-width: 152px;
    max-height: 147px;
    bottom: -15%;
    right: 10%;
    text-align: center;
    p:first-child {
      padding-top: 22%;
    }
    p:last-child {
      padding-top: 8%;
    }
  }
  .center {
    position: relative;
    width: 100%;
    padding: 0 70px;
    box-sizing: border-box;
    text-align: center;
    .conBg {
      // position: absolute;
      width: 90%;
    }
    .conTxt {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-38%, -30%);
      width: 22%;
      z-index: 8;
    }
    .light {
      position: absolute;
      width: 100%;
      z-index: 0;
      left: 50%;
      // top: 40%;
      transform: translate(-50%, 0%);
    }
  }
}

.login {
  position: relative;
  padding-top: 80px;
  text-align: center;
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: inline-block;
    width: 154px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
