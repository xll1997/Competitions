<!-- 
  * @Descripttion: 2021-01-20
  * @version:
  * @Date: 登录页面主战场 -- 队内贡献
  -->
<template>
  <div>
    <div class="topThree">
      <table>
        <tr>
          <th>姓名</th>
          <th>解题数量</th>
          <th>一血数量</th>
          <th>得分</th>
        </tr>
        <tr v-for="(item, index) in dataList" :key="index">
          <td>
            {{ item.name }}
            <a-icon
              type="flag"
              theme="twoTone"
              two-tone-color="#f00"
              v-if="item.status == 1"
            />
          </td>
          <td>{{ item.problemSolving }}</td>
          <td>{{ item.firstBlood }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    dataList: Array
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.topThree {
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  table {
    width: 100%;
    text-align: center;
    tr {
      width: 100%;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      th,
      td {
        border: 1px solid #191652;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
