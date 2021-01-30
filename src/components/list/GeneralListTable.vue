<!-- 
  * @Descripttion: 2021-01-22
  * @version:
  * @Date: 总榜 -- 总榜右侧表格
  -->
<template>
  <a-config-provider :locale="locale">
    <div class="table" :style="rightbg">
      <div class="topTen" :style="topTenBg" @click="topTenCharts">
        <p>
          <span>Top10队伍</span>
          <span>比赛态势</span>
        </p>
      </div>
      <div class="tableList">
        <!-- 总榜 -->
        <table v-if="$route.params.id == 0">
          <tr>
            <td v-for="item in generalList.tHead" :key="item">{{ item }}</td>
          </tr>
          <tr
            v-for="(item, index) in generalList.dataList.slice(
              (current - 1) * pageSize,
              current * pageSize
            )"
            :key="index"
          >
            <td
              :class="{
                red: item.id == 1,
                white: item.id == 2,
                orange: item.id == 3
              }"
            >
              <span>
                <i>{{ item.id }}</i>
              </span>
            </td>
            <td>{{ item.team }}</td>
            <td>{{ item.industry }}</td>
            <td>{{ item.totalScore }}</td>
            <td>{{ item.disparity }}</td>
            <td>{{ item.problemSolving }}</td>
            <td>{{ item.strengths }}</td>
            <td
              :class="{ first: item.firstBlood.num != 0 }"
              @click="firstDetail(item.firstBlood)"
            >
              {{ item.firstBlood.num }}
            </td>
          </tr>
        </table>
      </div>
      <!-- 分页 -->
      <div class="page">
        <a-pagination
          show-quick-jumper
          show-size-changer
          :default-current="1"
          :total="generalList.dataList.length"
          :page-size-options="pageSizeOptions"
          :show-total="total => `共 ${total} 条数据,已选${pageSize}条`"
          @showSizeChange="onShowSizeChange"
          @change="pageChange"
        />
      </div>
      <!-- 统计图 -->
      <StatisticalChart v-if="chartIsShow" @chartStatus="chartStatus" />
      <!-- 一血详情 -->
      <BloodDetails
        :bloodData="bloodData"
        v-if="bloodIsShow"
        @firstBloodStatus="firstBloodStatus"
      />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Pagination from '../base/Pagination'
import StatisticalChart from './StatisticalChart'
import BloodDetails from './BloodDetails'
export default {
  components: {
    Pagination,
    StatisticalChart,
    BloodDetails
  },
  props: {
    generalList: Object
  },
  data() {
    return {
      chartIsShow: false,
      bloodIsShow: false,
      // 左侧背景图片
      rightbg: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_one/right_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // top10
      topTenBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_one/top_ten_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      pageSize: 10, // 每页条数
      current: 1, // 当前页码
      locale: zhCN, // 中文
      pageSizeOptions: ['5', '10', '15'], // 指定每页可以显示多少条
      // 一血详情数据
      bloodData: {}
    }
  },
  computed: {},
  watch: {
    pageSize(val) {
      // console.log('pageSize', val)
    },

    current(val) {
      // console.log('current', val)
    }
  },
  created() {},
  mounted() {},
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      // console.log('111111111', current, pageSize)
    },
    pageChange(page, pageSize) {
      this.current = page
      // console.log('222', page, pageSize)
    },
    // 点击显示统计图
    topTenCharts() {
      this.chartIsShow = true
    },
    // 一血详情
    firstDetail(data) {
      if (data.num != 0) {
        this.bloodData = data
        this.bloodIsShow = true
      }
      // console.log(data)
    },
    // 一血显示状态
    firstBloodStatus(data) {
      this.bloodIsShow = data
    },
    // 统计图显示状态
    chartStatus(data) {
      this.chartIsShow = data
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/table.less';
.table {
  width: 77%;
  // background-color: #0f0;
  padding: 35px;
  box-sizing: border-box;
  tr {
    td {
      span {
        width: 30px !important;
        border-radius: 50%;
      }
    }
  }
}
</style>
