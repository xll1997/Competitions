<!-- 
  * @Descripttion: 2021-01-15
  * @version:
  * @Date: 未登录页面
  -->
<template>
  <div class="homeCenter">
    <!-- 总分排名 -->
    <TotalScore :totalScoreData="totalScoreData" />
    <!-- 战况 -->
    <WarSituation :status="status" :zkDataList="zkDataList" />
    <!-- 右侧 -->
    <RightCom title="得分规则" :dynamicData="dynamicData" />
  </div>
</template>

<script>
import TotalScore from '@/components/notLoginIn/TotalScore'
import RightCom from '@/components/notLoginIn/RightCom'
import WarSituation from '@/components/notLoginIn/WarSituation'
export default {
  components: {
    TotalScore,
    RightCom,
    WarSituation
  },
  props: {
    totalScoreData: Array
  },
  data() {
    return {
      // 解题动态数据
      dynamicData: {
        notAnswered: ['F12始终无人解出', 'F12始终无人解出'],
        answered: [
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '一血500分Get',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '一血500分Get',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '一血500分Get',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          },
          {
            num: 'G98795',
            category: 'E',
            vm: 'vm',
            text: '本题第 6 位，213分GET!',
            time: '09：15'
          }
        ]
      },
      status: '0', // 战况状态
      // 战况数据
      zkDataList: {
        //在线/战队总数
        online: {
          on: '100',
          all: '150'
        },
        subject: {
          num: '20',
          total: '56'
        },
        cenLeft: {
          on: '100',
          all: '150'
        },
        conquer: {
          quer: '100',
          no: '150'
        },
        tips: {
          tipsed: '10',
          total: '50'
        },
        // 实时战况图片
        sszkCenImg: require('../../assets/img/not_login/center/sszk.png'),
        // 历史战况图片
        lszkCenImg: require('../../assets/img/not_login/center/lszk.png')
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
.homeCenter {
  display: flex;
  justify-content: space-between;
  padding: 0 47px;
  div {
    flex: 1;
  }
}
</style>
