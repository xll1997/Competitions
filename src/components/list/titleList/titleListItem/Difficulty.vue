<!-- 
  * @Descripttion: 2021-01-26
  * @version:
  * @Date: 题榜 -- 难度榜
  -->
<template>
  <a-config-provider :locale="locale">
    <div class="table">
      <div class="tableList">
        <!-- 难度榜 -->
        <table>
          <tr>
            <td v-for="item in difficuliyData.tHead" :key="item">{{ item }}</td>
          </tr>
          <tr
            v-for="(item, index) in difficuliyData.dataList.slice(
              (current - 1) * pageSize,
              current * pageSize
            )"
            :key="index"
          >
            <td v-if="item.difficulty == 1">
              <span :style="goldBg">
                <i>{{ item.difficulty }}</i>
              </span>
            </td>
            <td v-if="item.difficulty == 2">
              <span :style="yinBg">
                <i>{{ item.difficulty }}</i>
              </span>
            </td>
            <td v-if="item.difficulty == 3">
              <span :style="tongBg">
                <i>{{ item.difficulty }}</i>
              </span>
            </td>
            <td v-if="item.difficulty > 3">
              <span>
                <i>{{ item.difficulty }}</i>
              </span>
            </td>
            <td>{{ item.tips }}</td>
            <td>{{ item.team }}</td>
            <td>{{ item.fastestTime }}</td>
            <td>{{ item.topOne }}</td>
            <td>{{ item.topTwo }}</td>
            <td>
              {{ item.topThree }}
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
          :total="difficuliyData.dataList.length"
          :show-total="total => `共 ${total} 条数据,已选${pageSize}条`"
          :page-size-options="pageSizeOptions"
          @showSizeChange="onShowSizeChange"
          @change="pageChange"
        />
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  components: {},
  props: {
    difficuliyData: Object
  },
  data() {
    return {
      bloodIsShow: false,

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
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize
      // console.log('111111111', current, pageSize)
    },
    pageChange(page, pageSize) {
      this.current = page
      // console.log('222', page, pageSize)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../assets/css/table.less';
</style>
