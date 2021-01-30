<!-- 
  * @Descripttion: 2021-01-15
  * @version:
  * @Date: 公告滚动提示
  -->
<template>
  <div class="wrap">
    <ul id="marquee">
      <li v-for="(item,index) in lists" :class="{active: reg.test(item)}" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Scroller',
  props: ['lists'], // 父组件传入数据， 数组形式
  components: {},
  data() {
    return {
        reg: RegExp(/未解出/)
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.move()
  },
  methods: {
    move() {
      // 获取内容区宽度
      let width = document.getElementById('marquee').scrollWidth
      let marquee = document.getElementById('marquee')
      let speed = 10 // 位移距离
      // 设置位移
      setInterval(function() {
        speed = speed - 1
        // 如果位移超过文字宽度，则回到起点
        if (-speed >= width) {
          speed = 500
        }
        marquee.style.transform = 'translateX(' + speed + 'px)'
      }, 20)
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  overflow: hidden;
//   color: red;
}
#box {
  height: 100%;
}
ul,
li {
  margin: 0;
  padding: 0;
  color: #fff;
}
.active {
    color: #fe0000;
}
ul {
  white-space: nowrap;
  margin: 0 10px;
}
li {
  height: 100%;
  list-style: none;
  margin-right: 20px;
  display: inline-block;
}
</style>
