<!-- 
  * @Descripttion: 2021-01-25
  * @version:
  * @Date: 登录页面主战场 -- top10比赛态势/统计图
  -->
<template>
  <div class="total">
    <div class="survey" :style="chartsBg">
      <i @click="close" class="isClose">X</i>
      <h2>
        top10队伍比赛态势
      </h2>
      <div class="con">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="myChart" style="width: 800px;height:500px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
export default {
  components: {},
  props: {
    noticeItemData: Object
  },
  data() {
    return {
      // 背景图片
      chartsBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_two/charts_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.mask()
  },
  mounted() {
    this.drawCharts()
  },
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('chartStatus', false)
    },
    // 统计图
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))

      let legendData = [
        'T123456',
        'T123123',
        'T456456',
        'T123321',
        'T456789',
        'T789321',
        'T161478',
        'T753159',
        'T258731',
        'T493182'
      ]
      // 绘制图表
      myChart.setOption({
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: [
          {
            // icon: 'bar',
            textStyle: {
              color: '#fff',
              fontSize: 14 //字体大小
            },
            data: legendData.slice(0, 5),
            x: 'center',
            y: '0%'
          },
          {
            // icon: 'bar',
            textStyle: {
              color: '#fff',
              fontSize: 14 //字体大小
            },
            data: legendData.slice(5, 10),
            x: 'center',
            y: '6%',
            bottom: 50
          }
        ],
        grid: {
          left: '3%',
          right: '3%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2h', '4h', '6h', '8h'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#aaa'
            }
          },
          axisLine: {
            //y轴
            show: true
          }
        },
        series: [
          {
            name: 'T123456',
            type: 'line',
            data: [120, 432, 101, 134]
          },
          {
            name: 'T123123',
            type: 'line',
            data: [220, 382, 191, 234]
          },
          {
            name: 'T456456',
            type: 'line',
            data: [150, 232, 201, 154]
          },
          {
            name: 'T123321',
            type: 'line',
            data: [320, 332, 301, 334]
          },
          {
            name: 'T456789',
            type: 'line',
            data: [820, 932, 901, 934]
          },
          {
            name: 'T789321',
            type: 'line',
            data: [100, 932, 901, 1204]
          },
          {
            name: 'T161478',
            type: 'line',
            data: [220, 902, 1000, 1204]
          },
          {
            name: 'T753159',
            type: 'line',
            data: [100, 902, 800, 1204]
          },
          {
            name: 'T258731',
            type: 'line',
            data: [150, 432, 980, 1204]
          },
          {
            name: 'T493182',
            type: 'line',
            data: [270, 392, 1100, 1204]
          }
        ]
      })
    }
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
    width: 900px;
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
      text-align: center;
      // span {
      //   display: inline-block;
      //   width: 3px;
      //   height: 17px;
      //   background-color: #44a7fc;
      //   margin-right: 15px;
      // }
    }

    .con {
      padding: 30px 0;
      font-size: 20px;
      // text-align: center;
      color: #fff;
    }
  }
}
</style>
