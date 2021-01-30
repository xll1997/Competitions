<!-- 
  * @Descripttion: 2021-01-19
  * @version:
  * @Date: 登录页面主战场 -- 总分排名
  -->
<template>
  <div>
    <div class="topThree">
      <!-- 银 -->
      <div class="item">
        <img src="@/assets/img/main_battlefield/silver.png" class="hg" alt />
        <p>{{ totalScoreData[1].num }}</p>
        <p>{{ totalScoreData[1].score }}</p>
        <p v-show="totalScoreData[1].firstBlood != 0">
          {{ totalScoreData[1].firstBlood }}
          <img src="@/assets/img/main_battlefield/blood.png" alt />
        </p>
      </div>
      <!-- 金 -->
      <div class="item">
        <img src="@/assets/img/main_battlefield/gold.png" class="hg" alt />
        <p>{{ totalScoreData[0].num }}</p>
        <p>{{ totalScoreData[0].score }}</p>
        <p v-show="totalScoreData[0].firstBlood != 0">
          {{ totalScoreData[0].firstBlood }}
          <img src="@/assets/img/main_battlefield/blood.png" alt />
        </p>
      </div>
      <!-- 铜 -->
      <div class="item">
        <img src="@/assets/img/main_battlefield/copper.png" class="hg" alt />
        <p>{{ totalScoreData[2].num }}</p>
        <p>{{ totalScoreData[2].score }}</p>
        <p v-show="totalScoreData[2].firstBlood != 0">
          {{ totalScoreData[2].firstBlood }}
          <img src="@/assets/img/main_battlefield/blood.png" alt />
        </p>
      </div>
    </div>
    <ul class="bot">
      <li
        v-for="(item, index) in totalScoreData.slice(3)"
        v-if="index != 6"
        :key="index"
      >
        <i>{{ index + 4 }}</i>
        <span>{{ item.num }}</span>
        <span>{{ item.score }}</span>
        <span :class="{ show: item.firstBlood == 0 }">
          <!-- <span v-show="item.firstBlood != 0"> -->
          {{ item.firstBlood }}
          <img src="@/assets/img/main_battlefield/blood.png" alt />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    totalScoreData: Array
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
.topThree,
.bot {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.topThree {
  align-items: center;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    text-align: center;
    .hg {
      position: absolute;
      top: -15px;
      right: 0px;
      width: 30px;
      height: 26px;
    }
    p {
      font-size: 12px;
      padding-bottom: 5px;
      &:last-child {
        color: #cd4545;
        border: 1px solid #cd4545;
        border-radius: 2px;
        width: 31px;
        height: 18px;
        line-height: 18px;
      }
    }
    &:nth-child(2) {
      width: 100px;
      height: 100px;
      .hg {
        top: -10px;
        right: 5px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
.bot {
  flex-wrap: wrap;
  display: flex;
  // justify-content: space-between;
  padding-top: 30px;
  overflow: hidden;
  li {
    width: 49%;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    padding-bottom: 20px;
    text-align: center;

    i {
      width: 14px;
      height: 14px;
      margin-right: 10px;
      display: inline-block;
      border-radius: 50%;
      font-size: 12px;
      line-height: 14px;
      background-color: #fff;
      color: #1b1c59;
      opacity: 0.5;
      text-align: center;
    }
    span {
      padding-right: 5px;
      &:last-child {
        padding-right: 0;
        color: #cd4545;
        border: 1px solid #cd4545;
        border-radius: 2px;
        width: 31px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        img {
          height: 95%;
        }
      }
    }
    .show {
      opacity: 0;
    }
  }
}
</style>
