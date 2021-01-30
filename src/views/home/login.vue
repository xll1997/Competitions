<!-- 
  * @Descripttion: 2021-01-15
  * @version:
  * @Date: 登录后页面 -- 主战场
  -->
<template>
  <!-- 主战场 -->
  <div class="login">
    <div class="img">
      <img src="@/assets/img/main_battlefield/zzc.png" alt />
    </div>
    <!-- 滚动条 -->
    <div class="topScroll">
      <div class="scroll">
        <span
          >{{ numTime.myHours }}:{{ numTime.myMinutes }}:{{
            numTime.mySeconds
          }}</span
        >
        <WrapScroll :lists="scrollList" class="scrollContainer" />
      </div>
    </div>
    <!-- 主内容 -->
    <div class="homeCenter">
      <!-- 题 -->
      <div class="topic" :style="tipsBg">
        <!-- 题类tab -->
        <div class="navTab">
          <p
            v-for="(item, index) in navData.navTabDataList"
            :key="index"
            @click="tipsChange(index)"
          >
            <span>{{ item.name }}</span>
            <img
              v-if="index == navIndex"
              src="@/assets/img/main_battlefield/nav_bg.png"
              alt
            />
          </p>
        </div>
        <!-- 题 -->
        <div class="picCon">
          <ul>
            <li
              v-for="(item, index) in navData.navTabDataList[navIndex].tips"
              :key="index"
            >
              <!-- <div class="subject">VM：{{item.con}}</div> -->
              <div class="subject">{{ item.name }}：{{ item.con }}</div>
              <div class="subCon">
                <div :class="{ score: true, active: item.score == 100 }">
                  +{{ item.score }}
                </div>
                <div class="tag">
                  <div :class="{ left: true, active: item.score == 100 }">
                    <span v-if="item.answers == ''">待作答</span>
                    <span v-else>答题者：{{ item.answers }}</span>
                    <span v-if="item.answers != ''">
                      获取flag的名次：{{ item.num }}
                      <img src="@/assets/img/main_battlefield/blood.png" alt />
                    </span>
                    <span v-if="item.answers != '' && item.firrstBoold != 0"
                      >未获取flag的名次：{{ item.num }}</span
                    >
                    <span
                      v-if="item.answers != ''"
                      :class="{ actRed: item.wp == '未提交' }"
                      >WP：{{ item.wp }}</span
                    >
                  </div>
                  <div class="right">
                    <span
                      v-for="(v, i) in item.tips"
                      :key="i"
                      @click="
                        tipsClick(
                          navData.navTabDataList[navIndex].name,
                          v,
                          i,
                          item.name
                        )
                      "
                      >!提示{{ i + 1 }}</span
                    >
                    <span @click="downLoad(item.word)">
                      <i class="iconfont icon-xiazai"></i>下载附件
                    </span>
                    <span
                      @click="
                        submitFlagClick(
                          navData.navTabDataList[navIndex].name,
                          item.num
                        )
                      "
                    >
                      <i class="iconfont icon-submit01"></i>提交Flag
                    </span>
                    <span
                      @click="
                        submitWp(
                          navData.navTabDataList[navIndex].name,
                          item.num
                        )
                      "
                    >
                      <i class="iconfont icon-submit01"></i>提交WP
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 总分合计 -->
        <div class="totalScoreAdd" :style="tipsFlBg">
          <p>
            总分合计：
            <span>点击查看统计表单</span>
          </p>
          <p>
            <span @click="totalSurvey">{{ navData.totalScore.score }}</span>
            <span
              v-for="(item, index) in navData.navTabDataList"
              :key="index"
              @click="tipsItemClick(index)"
              >{{ item.name }}：{{ item.score }}</span
            >
          </p>
        </div>
      </div>
      <!-- 战队信息 -->
      <div class="information">
        <!-- 战队信息 -->
        <div class="info" :style="frBg.oneBg">
          <div class="avatar">
            <img src="@/assets/img/main_battlefield/avatar.png" alt />
          </div>
          <div class="txt">
            <p>
              大黄蜂
              <span>战队</span>
            </p>
            <p>
              <span>
                2674
                <i>总分</i>
              </span>
              <span>
                39
                <i>排位</i>
              </span>
            </p>
          </div>
        </div>
        <!-- 总分排名 -->
        <div class="ranking" :style="frBg.twoBg">
          <ul class="nav">
            <li :style="backgroundPm" @click="totalPmIsShow = true">
              <span class="iconfont icon-paiming"></span> 总分排名
            </li>
            <li :style="backgroundPm" @click="totalPmIsShow = false">
              <span class="iconfont icon-paiming"></span> 队内贡献
            </li>
          </ul>
          <!-- 总分排名 -->
          <Ranking :totalScoreData="totalScoreData" v-if="totalPmIsShow" />
          <!-- 队内贡献 -->
          <Contribution :dataList="ContributionList" v-if="!totalPmIsShow" />
        </div>
        <!-- 比赛公告 -->
        <div class="notice" :style="frBg.threeBg">
          <div class="nav">
            <p :style="backgroundPm">
              <span class="iconfont icon-gonggao"></span>
              比赛公告
            </p>
          </div>
          <ul class="noticeUl">
            <li
              v-for="(item, index) in noticeDataList.slice(0, 5)"
              :key="index"
              @click="noticeItem(item)"
            >
              <em></em>
              <div>
                <p>{{ item.title }}</p>
                <span v-if="item.top == 1">[ 置顶 ]</span>
              </div>

              <i>{{ item.time }}</i>
            </li>
          </ul>
          <p class="more">
            <i @click="noticeMore">
              更多
              <span class="iconfont icon-moreinfo-copy"></span>
            </i>
          </p>
        </div>
      </div>
    </div>
    <!-- 弹框部分 -->
    <!-- 总分概况 -->
    <TotalSurvey
      :navData="navData"
      v-if="totalIsShow"
      @totalStatus="totalStatus"
    />
    <!-- 比赛公告 -->
    <Notice
      :noticeDataList="noticeDataList"
      v-if="noticeIsShow"
      @noticeStatus="noticeStatus"
    />
    <!-- 提示弹框 -->
    <Tips :tipsData="tipsData" v-if="tipsIsShow" @tipsStatus="tipsStatus" />
    <!-- 点击提交flag -->
    <SubmitFlag
      :flagData="flagData"
      v-if="flagIsShow"
      @flagStatus="flagStatus"
    />
    <!-- 提交WP -->
    <SubmitWp :WPData="WPData" v-if="WPIsShow" @wpStatus="wpStatus" />
    <!-- 得分详情 -->
    <ScoreDetails
      :scoreDetailData="scoreDetailData"
      v-if="scoreDetailsIsShow"
      @scoreDetailsStatus="scoreDetailsStatus"
    />
    <!-- 单条公告弹框 -->
    <NoticeItem
      :noticeItemData="noticeItemData"
      v-if="noticeItemIsShow"
      @noticeItemStatus="noticeItemStatus"
    />
  </div>
</template>

<script>
import WrapScroll from '@/components/login/WrapScroll'
import Ranking from '@/components/login/Ranking'
import TotalSurvey from '@/components/login/TotalSurvey'
import Notice from '@/components/login/Notice'
import Tips from '@/components/login/Tips'
import SubmitFlag from '@/components/login/SubmitFlag'
import SubmitWp from '@/components/login/SubmitWp'
import Contribution from '@/components/login/Contribution'
import ScoreDetails from '@/components/login/ScoreDetails'
import NoticeItem from '@/components/login/NoticeItem'

export default {
  components: {
    WrapScroll,
    Ranking,
    TotalSurvey,
    Notice,
    Tips,
    SubmitFlag,
    SubmitWp,
    Contribution,
    ScoreDetails,
    NoticeItem
  },
  props: {
    totalScoreData: Array
  },
  data() {
    return {
      // 公告单条展示
      noticeItemIsShow: false,
      // 得分详情展示
      scoreDetailsIsShow: false,
      // 总分排名展示
      totalPmIsShow: true,
      // 点击提交wp展示
      WPIsShow: false,
      // 点击提交flag展示
      flagIsShow: false,
      // 点击提示展示
      tipsIsShow: false,
      // 总分概况展示
      totalIsShow: false,
      // 比赛公告展示
      noticeIsShow: false,
      // 导航索引
      navIndex: 0,
      // 公告栏数据
      scrollList: [
        'A类-VM始终未解出！',
        'A类-VM始终未解出！',
        'G330098-解出-F7，本题第23位，200分GET！',
        '09：29  G098945-解出'
      ],
      // 总分排名背景图片
      backgroundPm: {
        backgroundImage:
          'url(' + require('../../assets/img/main_battlefield/ggBg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 左侧背景图片
      tipsBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/main_battlefield/tipsBg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      tipsFlBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/main_battlefield/tips_fl_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 右侧背景图片
      frBg: {
        oneBg: {
          backgroundImage:
            'url(' +
            require('../../assets/img/main_battlefield/zd_bg_one.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        twoBg: {
          backgroundImage:
            'url(' +
            require('../../assets/img/main_battlefield/zd_bg_two.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        },
        threeBg: {
          backgroundImage:
            'url(' +
            require('../../assets/img/main_battlefield/zd_bg_three.png') +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }
      },
      // nav导航
      navData: {
        totalScore: {
          score: '9988',
          tipsNum: '16题'
        },
        firstBlood: {
          num: '20',
          tipsNum: '16题',
          score: '1111'
        },
        navTabDataList: [
          {
            name: 'A类',
            score: 968,
            tipsNum: '16题',
            solvedNum: '4题',
            firstBlood: '2题',
            firstBloodScore: 200,
            tips: [
              {
                name: 'VM',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                status: 1,
                num: 1,
                firrstBoold: 0,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: '李四'
              },
              {
                name: 'Con',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 2,
                status: 0,
                firrstBoold: 1,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              },
              {
                name: 'spa',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 2,
                status: 0,
                firrstBoold: 2,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              }
            ]
          },
          {
            name: 'B类',
            score: 200,
            tipsNum: '16题',
            solvedNum: '4题',
            firstBlood: '2题',
            firstBloodScore: 200,
            tips: [
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，',
                score: '0',
                num: 1,
                status: 0,
                firrstBoold: 0,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: '小小'
              },
              {
                name: 'as',
                con:
                  '对以下网址进行拖库，下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行奥术大师多拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 2,
                status: 1,
                firrstBoold: 1,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              },
              {
                name: 'sa',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 2,
                firrstBoold: 2,
                status: 0,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              }
            ]
          },
          {
            name: 'C类',
            score: 555,
            tipsNum: '16题',
            solvedNum: '4题',
            firstBlood: '2题',
            firstBloodScore: 200,
            tips: [
              {
                name: 'asdsd',
                con:
                  '对以下网址进D从XCAS从行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 1,
                status: 0,
                firrstBoold: 0,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: '李四'
              },
              {
                name: 'CMM',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 2,
                firrstBoold: 1,
                status: 1,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              },
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 2,
                status: 0,
                firrstBoold: 2,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              }
            ]
          },
          {
            name: 'D类',
            score: 321,
            tipsNum: '16题',
            solvedNum: '4题',
            firstBlood: '2题',
            firstBloodScore: 200,
            tips: [
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以ASCASCAC进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 1,
                status: 0,
                firrstBoold: 0,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: '李四'
              },
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 2,
                status: 1,
                firrstBoold: 1,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              },
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 2,
                status: 1,
                firrstBoold: 2,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              }
            ]
          },
          {
            name: 'E类',
            score: 205,
            tipsNum: '16题',
            solvedNum: '4题',
            firstBlood: '2题',
            firstBloodScore: 200,
            tips: [
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 1,
                status: 1,
                firrstBoold: 0,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: '张三'
              },
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '100',
                num: 2,
                status: 1,
                firrstBoold: 1,
                wp: '未提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              },
              {
                name: 'asdsd',
                con:
                  '对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进行拖库，对以下网址进 行拖库，对以下网址进行拖库，对以下网址进行拖库',
                score: '0',
                num: 2,
                status: 0,
                firrstBoold: 2,
                wp: '提交',
                tips: ['熊猫', '狗子'],
                word: '111',
                answers: ''
              }
            ]
          }
        ]
      },

      // 公告数据
      noticeDataList: [
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '1',
          time: '10：29'
        },
        {
          title: 'xxx战队犯规，被禁赛！',
          con:
            'xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！xxx战队犯规，被禁赛！',
          top: '1',
          time: '10：29'
        },
        {
          title: '五道新题已放出',
          con:
            '五道新题已放出五道新题已放出五道新题已放出五道新题已放出五道新题已放出',
          top: '1',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '0',
          time: '10：29'
        },
        {
          title: '还有一个小时比赛即将结束,请抓紧时间！',
          con:
            '还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！还有一个小时比赛即将结束,请抓紧时间！',
          top: '0',
          time: '10：29'
        }
      ],
      // 提示数据
      tipsData: {},
      // flag数据
      flagData: {},
      // wp数据
      WPData: {},
      // 队内贡献数据
      ContributionList: [
        {
          name: '张三',
          status: 1,
          problemSolving: 15,
          firstBlood: 1,
          score: 1430
        },
        {
          name: '李四',
          status: 0,
          problemSolving: 15,
          firstBlood: 1,
          score: 1430
        },
        {
          name: '王五',
          status: 0,
          problemSolving: 12,
          firstBlood: 1,
          score: 140
        },
        {
          name: '赵六',
          status: 0,
          problemSolving: 12,
          firstBlood: 0,
          score: 100
        }
      ],
      // 得分详情数据
      scoreDetailData: {},
      // 单条公告数据
      noticeItemData: {},
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
  created() {},
  mounted() {
    this.testTimer()
  },
  methods: {
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
    // 答题导航点击切换
    tipsChange(index) {
      this.navIndex = index
    },
    // 下载附件
    downLoad(url) {
      // window.open('')
      console.log('下载地址', url)
    },
    // 点击单条公告
    noticeItem(data) {
      this.noticeItemData = data
      this.noticeItemIsShow = true
      // console.log('点击公告', data)
    },
    // 公告点击查看更多
    noticeMore() {
      console.log('点击查看更多')
      this.noticeIsShow = true
    },
    // 总分概况
    totalSurvey() {
      this.totalIsShow = true
    },
    // 总分概况点击关闭状态值
    totalStatus(data) {
      this.totalIsShow = data
    },
    // 比赛公告点击关闭状态值
    noticeStatus(data) {
      this.noticeIsShow = data
    },
    // 点击提示
    tipsClick(name, val, index, tipsName) {
      this.tipsIsShow = true
      this.tipsData.name = name
      this.tipsData.tipsName = tipsName
      this.tipsData.val = val
      this.tipsData.index = index + 1
    },
    // 提示点击关闭状态值
    tipsStatus(data) {
      this.tipsIsShow = data
    },
    // 点击提交flag
    submitFlagClick(name, id) {
      this.flagIsShow = true
      this.flagData.name = name
      this.flagData.id = id
    },
    // 点击提交flag关闭状态值
    flagStatus(data) {
      this.flagIsShow = data
    },
    // 点击提交WP
    submitWp(name, id) {
      this.WPIsShow = true
      this.WPData.name = name
      this.WPData.id = id
    },
    // 点击提交WP关闭状态值
    wpStatus(data) {
      this.WPIsShow = data
    },
    // 得分详情点击
    tipsItemClick(index) {
      this.scoreDetailData = this.navData.navTabDataList[index]
      this.scoreDetailsIsShow = true
      // console.log('dianji', this.scoreDetailData)
    },
    // 得分详情关闭状态值
    scoreDetailsStatus(data) {
      this.scoreDetailsIsShow = data
    },
    // 公告单条关闭状态值
    noticeItemStatus(data) {
      this.noticeItemIsShow = data
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  .img {
    position: absolute;
    z-index: 99;
    top: 136px;
    left: 50px;
    img {
      width: 184px;
      height: 83px;
    }
  }
  // 滚动条
  .topScroll {
    position: relative;
    z-index: 5;
    display: flex;
    width: 100%;
    padding-left: 108px;
    height: 52px;
    line-height: 52px;

    .scroll {
      flex: 1;
      display: flex;
      justify-content: space-between;
      background-color: rgba(255, 255, 255, 0.1);
      span {
        width: 15%;
        display: inline-block;
        text-align: right;
      }
      .scrollContainer {
        align-self: center;
        font-size: 18px;
        margin-left: 10px;
        width: 83%;
        line-height: 30px;
        overflow: hidden;
      }
    }
  }

  // 主内容
  .homeCenter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 47px;
    margin-top: 50px;
    // 左侧答题
    .topic {
      position: relative;
      width: 70%;
      // padding: 50px;
      box-sizing: border-box;
      .navTab {
        display: flex;
        padding: 30px 50px 50px;
        justify-content: space-between;
        // text-align: center;
        font-size: 18px;
        p {
          flex: 1;
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          span {
            flex: 1;
            cursor: pointer;
          }
          img {
            width: 40%;
            flex: 1;
          }
        }
        span {
          flex: 1;
          cursor: pointer;
        }
      }
      .picCon {
        padding: 0 50px 170px;
        ul {
          height: 460px;
          overflow-y: auto;
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
        li {
          padding-top: 30px;
          &:first-child {
            padding-top: 0;
          }
          .subject {
            font-size: 18px;
            padding-bottom: 30px;
          }
          .subCon {
            display: flex;
            justify-content: space-between;
            .score,
            .tag {
              height: 53px;
              line-height: 53px;
              background-color: rgba(255, 255, 255, 0.1);
            }
            .score {
              width: 8%;
              text-align: center;
              color: #f00;
            }
            .tag {
              display: flex;
              width: 91%;
              padding: 0 20px;
              box-sizing: border-box;
              justify-content: space-between;
              .left {
                width: 49%;
                display: flex;
                font-size: 14px;
                justify-content: space-between;
                color: #f00;
              }
              .active {
                color: #40ff00;
              }
              .right {
                width: 49%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                span {
                  cursor: pointer;
                }
                span:nth-child(1),
                span:nth-child(2) {
                  padding: 2px;
                  // margin-right: 7px;
                  border: 1px solid #ff7200;
                  height: 24px;
                  line-height: 22px;
                  color: #ff7200;
                  // font-size: 14px;
                }
                span:nth-child(3) {
                  text-decoration: underline;
                }
                span:nth-child(4),
                span:nth-child(5) {
                  opacity: 0.5;
                }
              }
            }
            .active {
              color: #40f50a;
              .score {
                color: #40f50a;
              }
            }
            .actRed {
              color: #f00;
            }
          }
        }
      }
      .totalScoreAdd {
        position: absolute;
        bottom: 0;
        padding: 0 15px;
        box-sizing: border-box;
        width: 100%;
        height: 135px;
        p:first-child {
          padding: 20px 0;
          font-size: 18px;
          span {
            font-size: 13px;
          }
        }
        p:last-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          span:first-child {
            font-size: 28px;
          }
          span {
            font-size: 18px;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    // 右侧信息
    .information {
      width: 28%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      // 战队信息
      .info {
        height: 15%;
        display: flex;
        // justify-content: space-between;
        justify-content: flex-start;
        .avatar {
          padding: 25px;
          // width: 40%;
          box-sizing: border-box;
          text-align: center;
          img {
            // width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .txt {
          width: 70%;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          p:first-child {
            font-size: 24px;
            span {
              font-size: 18px;
            }
          }
          p:last-child {
            font-size: 24px;
            span {
              margin-right: 10px;
            }
            i {
              font-size: 18px;
            }
          }
        }
      }
      // 总分排名
      .ranking {
        height: 43%;
        overflow-y: auto;
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
        .nav {
          padding: 15px 0;
          display: flex;
          justify-content: center;
          // height: 41px;
          li {
            // width: 30%;
            height: 41px;
            float: left;
            line-height: 41px;
            cursor: pointer;
            &:first-child {
              margin-right: 10px;
            }
          }
        }
      }
      // 比赛公告
      .notice {
        height: 35%;
        overflow-y: auto;
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
        .nav {
          padding: 15px 0;
          display: flex;
          justify-content: center;
          // height: 41px;
          p {
            // width: 30%;
            height: 41px;
            float: left;
            line-height: 41px;
          }
        }
        .noticeUl {
          padding: 0px 20px 0px 20px;
          box-sizing: border-box;
          li {
            list-style: circle;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
            cursor: pointer;
            em {
              width: 7px;
              height: 7px;
              border: 1px solid #fff;
              border-radius: 50%;
            }
            div {
              width: 80%;
              p {
                // float: left;
                display: inline-block;
                width: 80%;
                font-size: 14px;
                overflow: hidden; //超出部分隐藏
                text-overflow: ellipsis; //超出部分显示...
                white-space: nowrap; //文本强制一行显示
              }
              span {
                color: #fe0000;
              }
            }

            i {
              width: 15%;
              display: inline-block;
              text-align: right;
            }
          }
        }
        .more {
          text-align: right;
          padding: 0 20px;
          cursor: pointer;
          i {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
