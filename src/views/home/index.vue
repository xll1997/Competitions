<!-- 
  * @Descripttion: 2021-01-18
  * @version:
  * @Date: index页面
  -->
<template>
  <div class="index">
    <!-- 未登录 -->
    <NotLogin :totalScoreData="noScoreData" v-if="loginStatus == 0" />
    <!-- 登录 -->
    <Login :totalScoreData="totalScoreData" v-if="loginStatus == 1" />
  </div>
</template>

<script>
import NotLogin from './notLogin' //未登录
import Login from './login' //登录后 -- 主战场
export default {
  components: {
    NotLogin,
    Login
  },
  data() {
    return {
      loginStatus: '1', //登录状态
      // 总分排名数据--开赛后及结束
      totalScoreData: [
        {
          ranking: '01',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 0
        },
        {
          ranking: '02',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 2
        },
        {
          ranking: '03',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 4
        },
        {
          ranking: '04',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 2
        },
        {
          ranking: '05',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 2
        },
        {
          ranking: '06',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 2
        },
        {
          ranking: '07',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 0
        },
        {
          ranking: '08',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 3
        },
        {
          ranking: '09',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 0
        },
        {
          ranking: '10',
          num: 'G330098',
          name: '能源',
          score: 1755,
          firstBlood: 0
        }
      ],
      // 总分排名数据--开赛前
      noScoreData: [
        {
          ranking: '01',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '02',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '03',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '04',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '05',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '06',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '07',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '08',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '09',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        },
        {
          ranking: '10',
          num: '暂无数据',
          name: '行业',
          score: '虚位以待',
          firstBlood: 0
        }
      ]
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
.index {
  margin-bottom: 50px;
}
</style>
