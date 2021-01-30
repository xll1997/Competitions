<!-- 
  * @Descripttion: 2021-01-26
  * @version:
  * @Date: 题榜 -- 题型榜
  -->
<template>
  <a-config-provider :locale="locale">
    <div class="table">
      <!-- 题型榜 -->
      <ul class="nav">
        <li
          v-for="(item, index) in titleListData.classData"
          @click="tab(item, index)"
        >
          <span>{{ item }}类</span>
          <img
            v-if="index == navIndex"
            src="@/assets/img/main_battlefield/nav_bg.png"
            alt
          />
        </li>
      </ul>
      <div class="tableList">
        <table>
          <tr>
            <td v-for="item in titleListData.tHead" :key="item">{{ item }}</td>
          </tr>
          <!-- v-if="navData == item.name" -->
          <tr
            v-for="(item, index) in titleListData.dataList[navIndex].data.slice(
              (current - 1) * pageSize,
              current * pageSize
            )"
            :key="index"
          >
            <td v-if="item.id == 1">
              <span :style="goldBg">
                <i>{{ item.id }}</i>
              </span>
            </td>
            <td v-if="item.id == 2">
              <span :style="yinBg">
                <i>{{ item.id }}</i>
              </span>
            </td>
            <td v-if="item.id == 3">
              <span :style="tongBg">
                <i>{{ item.id }}</i>
              </span>
            </td>
            <td v-if="item.id > 3">
              <span>
                <i>{{ item.id }}</i>
              </span>
            </td>
            <td>{{ item.team }}</td>
            <td>{{ item.totalScore }}</td>
            <td>{{ item.disparity }}</td>
            <td>{{ item.problemSolving }}</td>
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
          :total="titleListData.dataList[navIndex].data.length"
          :show-total="total => `共 ${total} 条数据,已选${pageSize}条`"
          :page-size-options="pageSizeOptions"
          @showSizeChange="onShowSizeChange"
          @change="pageChange"
        />
      </div>

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
import BloodDetails from '../../BloodDetails'
export default {
  components: {
    BloodDetails
  },
  props: {
    titleListData: Object
  },
  data() {
    return {
      // 导航索引
      navIndex: 0,
      navData: 'A类',
      // 皇冠
      goldBg: {
        backgroundImage:
          'url(' +
          require('../../../../assets/img/list/list_one/gold.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      yinBg: {
        backgroundImage:
          'url(' +
          require('../../../../assets/img/list/list_one/yin.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      tongBg: {
        backgroundImage:
          'url(' +
          require('../../../../assets/img/list/list_one/tong.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      bloodIsShow: false,
      pageSize: 10, // 每页条数
      current: 1, // 当前页码
      locale: zhCN, // 中文
      pageSizeOptions: ['5', '10', '15'], //指定每页可以显示多少条
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
    tab(data, index) {
      this.navData = data
      console.log(data)
      this.navIndex = index
    },
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      // console.log('111111111', current, pageSize)
    },
    pageChange(page, pageSize) {
      this.current = page
      // console.log('222', page, pageSize)
    },
    // 点击显示统计图
    topTenCharts() {},
    // 一血详情
    firstDetail(data) {
      if (data.num != 0) {
        this.bloodData = data
        this.bloodIsShow = true
      }
      console.log(data)
    },
    // 一血显示状态
    firstBloodStatus(data) {
      this.bloodIsShow = data
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/css/table.less';
.table {
  position: relative;
}
.nav {
  position: absolute;
  left: 360px;
  top: -85px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 18px;
  width: 400px;
  li {
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
      width: 80%;
      flex: 1;
    }
  }
  span {
    flex: 1;
    cursor: pointer;
  }
}
</style>
