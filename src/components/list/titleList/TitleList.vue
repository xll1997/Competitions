<!-- 
  * @Descripttion: 2021-01-26
  * @version:
  * @Date: 题榜
  -->
<template>
  <a-config-provider :locale="locale">
    <div class="titleList" :style="rightbg">
      <ul class="nav" :style="listNavBg">
        <li
          :class="{ active: activeStyle.difficultyStyle }"
          @click="
            DifficultyIsShow = true
            CutTopicIsShow = false
            QuestionTypeIsShow = false
            activeStyle.difficultyStyle = true
            activeStyle.cutTopicStyle = false
            activeStyle.questionTypeStyle = false
          "
        >
          <span>
            难度榜
          </span>
          <img
            v-show="activeStyle.difficultyStyle"
            src="@/assets/img/main_battlefield/nav_bg.png"
            alt=""
          />
        </li>
        <li
          :class="{ active: activeStyle.cutTopicStyle }"
          @click="
            DifficultyIsShow = false
            CutTopicIsShow = true
            QuestionTypeIsShow = false
            activeStyle.difficultyStyle = false
            activeStyle.cutTopicStyle = true
            activeStyle.questionTypeStyle = false
          "
        >
          <span>
            斩题榜
          </span>
          <img
            v-show="activeStyle.cutTopicStyle"
            src="@/assets/img/main_battlefield/nav_bg.png"
            alt=""
          />
        </li>
        <li
          :class="{ active: activeStyle.questionTypeStyle }"
          @click="
            DifficultyIsShow = false
            CutTopicIsShow = false
            QuestionTypeIsShow = true
            activeStyle.difficultyStyle = false
            activeStyle.cutTopicStyle = false
            activeStyle.questionTypeStyle = true
          "
        >
          <span>
            题型榜
          </span>
          <img
            v-show="activeStyle.questionTypeStyle"
            src="@/assets/img/main_battlefield/nav_bg.png"
            alt=""
          />
        </li>
      </ul>
      <div class="con">
        <!-- 难度榜 -->
        <Difficulty
          :difficuliyData="titleListData.difficuliyData"
          v-if="DifficultyIsShow"
        />
        <!-- 斩题榜 -->
        <CutTopic
          :cutTopicData="titleListData.cutTopicData"
          v-if="CutTopicIsShow"
        />
        <!-- 题型榜 -->
        <QuestionType
          :titleListData="titleListData.titleListData"
          v-if="QuestionTypeIsShow"
        />
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Difficulty from './titleListItem/Difficulty'
import CutTopic from './titleListItem/CutTopic'
import QuestionType from './titleListItem/QuestionType'
export default {
  components: {
    Difficulty,
    CutTopic,
    QuestionType
  },
  props: {
    titleListData: Object
  },
  data() {
    return {
      // 点击切换class样式
      activeStyle: {
        difficultyStyle: true,
        cutTopicStyle: false,
        questionTypeStyle: false
      },
      DifficultyIsShow: true, //难度榜
      CutTopicIsShow: false, //斩题榜
      QuestionTypeIsShow: false, //题型榜
      // nav背景图片
      listNavBg: {
        backgroundImage:
          'url(' +
          require('../../../assets/img/list/list_two/list_nav_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 右侧背景图片
      rightbg: {
        backgroundImage:
          'url(' +
          require('../../../assets/img/list/list_one/right_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      locale: zhCN // 中文
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
.titleList {
  position: relative;
  width: 77%;
  // background-color: #a00;
  box-sizing: border-box;
  .nav {
    display: flex;
    justify-content: center;
    // justify-content: space-around;
    width: 383px;
    height: 57px;
    margin-top: -57px;
    line-height: 57px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
      span {
        // flex: 1;
        cursor: pointer;
      }
      img {
        position: absolute;
        width: 50%;
        height: 10px;
        bottom: -5px;
        // flex: 1;
      }
      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        width: 30%;
      }
      &:nth-child(3) {
        width: 30%;
      }
    }
    li:hover {
      color: #fff;
      cursor: pointer;
    }
    .active {
      color: #fff;
      font-size: 24px;
    }
  }
  .con {
    padding: 35px;
    // background-color: #aa0;
  }
}
</style>
