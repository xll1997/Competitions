div<!-- 
  * @Descripttion: 2021-01-26
  * @version:
  * @Date: 题榜 -- 斩题榜
  -->
<template>
  <a-config-provider :locale="locale">
    <div class="table">
      <div class="tableList">
        <!-- 斩题榜 -->
        <table>
          <thead>
            <tr>
              <td rowspan="2">{{ cutTopicData.tHead.num }}</td>
              <td rowspan="2">{{ cutTopicData.tHead.team }}</td>
              <td rowspan="2">{{ cutTopicData.tHead.score }}</td>
              <td :colspan="cutTopicData.tHead.classA.include.length">
                {{ cutTopicData.tHead.classA.name }}
              </td>
              <td :colspan="cutTopicData.tHead.classB.include.length">
                {{ cutTopicData.tHead.classB.name }}
              </td>
              <td :colspan="cutTopicData.tHead.classC.include.length">
                {{ cutTopicData.tHead.classC.name }}
              </td>
            </tr>
            <tr>
              <td
                v-for="(item, index) in cutTopicData.tHead.classA.include"
                :key="item"
              >
                {{ item }}
              </td>
              <td
                v-for="(item, index) in cutTopicData.tHead.classB.include"
                :key="item"
              >
                {{ item }}
              </td>
              <td
                v-for="(item, index) in cutTopicData.tHead.classC.include"
                :key="item"
              >
                {{ item }}
              </td>
            </tr>
          </thead>

          <tr
            v-for="(item, index) in cutTopicData.dataList.slice(
              (current - 1) * pageSize,
              current * pageSize
            )"
            :key="index"
          >
            <td v-if="item.num == 1">
              <span :style="goldBg">
                <i>{{ item.num }}</i>
              </span>
            </td>
            <td v-if="item.num == 2">
              <span :style="yinBg">
                <i>{{ item.num }}</i>
              </span>
            </td>
            <td v-if="item.num == 3">
              <span :style="tongBg">
                <i>{{ item.num }}</i>
              </span>
            </td>
            <td v-if="item.num > 3">
              <span>
                <i>{{ item.num }}</i>
              </span>
            </td>
            <td>{{ item.team }}</td>
            <td>{{ item.score }}</td>
            <td v-for="(v, i) in item.classA" :key="i + time + '0'">
              <a-icon type="check" v-if="v == 1" />
            </td>
            <td v-for="(val, num) in item.classB" :key="num + time + '2'">
              <a-icon type="check" v-if="val == 1" />
            </td>
            <td v-for="(vv, nn) in item.classC" :key="nn + time + '1'">
              <a-icon type="check" v-if="vv == 1" />
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
          :total="cutTopicData.dataList.length"
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
    cutTopicData: Object
  },
  data() {
    return {
      bloodIsShow: false,
      time: new Date().getMilliseconds(),

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
      pageSize: 9, // 每页条数
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
thead tr {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
