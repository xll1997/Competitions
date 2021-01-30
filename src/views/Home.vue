<!-- 
  * @Descripttion: 2021-01-13
  * @version:
  * @Date: home页面
  -->
<template>
  <div class="home" :style="backgroundDiv">
    <HeaderNav />
    <!-- 中间部分 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <div class="footer" :style="footerBackground">
      <p>
        <span>京ICP证184989号</span>
        <span>京ICP证13789447号</span>
        <span>京网文（2018）83747-1192号</span>
        <span>京公网安备11010474538947号</span>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  },
  data() {
    return {
      // bgList: ['backgroundFirst', 'backgroundSecond', 'backgroundThird'],
      // 大背景图片
      backgroundDiv: {
        backgroundImage:
          'url(' +
          require('../assets/img/not_login/not_login_one/bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 底部背景图
      footerBackground: {
        backgroundImage:
          'url(' + require('../assets/img/not_login/footer_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
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
.home {
  width: 100%;
  // height: 100%;
}

.footer {
  width: 100%;
  height: 88px;
  // margin-top: 50px;
  line-height: 88px;
  text-align: center;
  span:nth-child(1),
  span:nth-child(2) {
    padding-right: 20px;
  }
  span:nth-child(4) {
    padding-left: 10px;
  }
}
</style>
