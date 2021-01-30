<!-- 
  * @Descripttion: 2021-01-22
  * @version:
  * @Date: 总榜/个人榜 -- 左侧下拉菜单
  -->
<template>
  <div class="tab" :style="selectbg">
    <ul>
      <li v-for="(item, index) in listSelectData" :key="index">
        <p class="title" @click="selectClick(item.name)" :style="item.bg">
          {{ item.name }}
        </p>
        <!-- <transition-group tag="div" name="btn" class="tj" v-show="item.name == selectName"> -->
        <div class="tj" v-show="item.name == selectName">
          <div class="item" :style="selectTabBg">
            <div class="one">
              <span>队员人数</span>
              <p>
                <b
                  :style="{ width: (item.teamMember / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.teamMember }}</i>
              </p>
            </div>
            <div class="one">
              <span>在线人数</span>
              <p>
                <b
                  :style="{ width: (item.onLine / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.onLine }}</i>
              </p>
            </div>
            <div class="one">
              <span>答题人数</span>
              <p>
                <b
                  :style="{ width: (item.answer / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.answer }}</i>
              </p>
            </div>
          </div>
          <div class="item" :style="selectTabBg">
            <div class="one">
              <span>队员总数</span>
              <p>
                <b
                  :style="{
                    width: (item.teamMemberTotal / item.total) * 100 + '%'
                  }"
                ></b>
                <i>{{ item.teamMemberTotal }}</i>
              </p>
            </div>
            <div class="one">
              <span>在线队伍</span>
              <p>
                <b
                  :style="{ width: (item.onLineTeam / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.onLineTeam }}</i>
              </p>
            </div>
            <div class="one">
              <span>题目总数</span>
              <p>
                <b
                  :style="{ width: (item.answerTeam / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.answerTeam }}</i>
              </p>
            </div>
          </div>
          <div class="item" :style="selectTabBg">
            <div class="one">
              <span>题目总数</span>
              <p>
                <b
                  :style="{ width: (item.tipsTotal / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.tipsTotal }}</i>
              </p>
            </div>
            <div class="one">
              <span>被攻克</span>
              <p>
                <b
                  :style="{
                    width: (item.beConquered / item.total) * 100 + '%'
                  }"
                ></b>
                <i>{{ item.beConquered }}</i>
              </p>
            </div>
            <div class="one">
              <span>未解出</span>
              <p>
                <b
                  :style="{ width: (item.notAnswer / item.total) * 100 + '%' }"
                ></b>
                <i>{{ item.notAnswer }}</i>
              </p>
            </div>
          </div>
        </div>
        <!-- </transition-group> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    listSelectData: Array
  },
  data() {
    return {
      selectName: '全部行业',
      // 左侧背景图片
      selectbg: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/selectbg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      selectTabBg: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_two/select_tab_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    selectClick(name) {
      this.selectName = name
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes myHeight {
  0% {
    display: none;
  }
  100% {
    display: block;
  }
}
.tab {
  width: 20%;
  padding: 30px 40px 30px 30px;
  box-sizing: border-box;
  // background-color: #f00;
  ul {
    li {
      // margin-bottom: 15px;
      font-size: 14px;
      .title {
        width: 143px;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        // background-color: #00f;
      }

      .tj {
        // display: none;
        height: 100%;
        // animation: myHeight 5s;
        .item {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          padding: 20px;
          height: 117px;
          box-sizing: border-box;
          margin-bottom: 20px;
          // background-color: #002535;
          .one {
            flex: 1;
            // height: 12px;
            // line-height: 12px;
            // background-color: #0ff;
            display: flex;
            justify-content: space-between;
            span {
              width: 40%;
            }
            p {
              position: relative;
              margin-top: 7px;
              text-align: right;
              width: 60%;
              z-index: 0;
              height: 6px;
              border-radius: 3px;
              background-color: rgba(255, 255, 255, 0.3);
              b {
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 3px;
                // width: 50%;
                z-index: 5;
                height: 100%;
                display: inline-block;
                background-color: rgba(255, 255, 255, 0.7);
              }
              i {
                position: absolute;
                bottom: 5px;
                right: 0;
                z-index: 8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
