<!-- 
  * @Descripttion: 2021-01-29
  * @version:
  * @Date: 赛事指南
  -->
<template>
  <div class="guide" :style="backgroundFirst">
    <div class="img">
      <img src="@/assets/img/list/list_one/sszk.png" alt />
    </div>
    <!-- 简介部分 -->
    <div class="wrap">
      <!-- 赛事简介 -->
      <div class="item">
        <Title title="赛事简介" />
        <div class="con" :style="znbjOne">
          <p>
            第二届“XXX”网络安全大赛（以下简称“第二届‘网鼎杯’大赛”）是由国家网络与信息安全信息通报中心、深圳市人民政府、广东省公安厅联合支持，深信服科技股份有限公司、北京永信至诚科技股份有限公司联合主办，阿里巴巴（中国）网络技术有限公司、百度在线网络技术（北京）有限公司、奇安信科技集团股份有限公司、清华大学网络科学与网络空间研究院、深圳市腾讯计算机系统有限公司、中国科学院信息工程研究所联合协办的国家顶级网络安全赛事。“网鼎杯”网络安全大赛2018年在北京举办了第一届，共吸引了全国7000支队伍、2.25万人参赛，是我国迄今为止规模最大、覆盖面最广的一次高水平网络安全大赛，这对于进一步磨砺网络安全攻防能力，发现网络安全专门人才，提升全社会网络安全意识具有重要意义。
          </p>
          <p>
            按照“XXX”大赛两年一届的举办原则，第二届“网鼎杯”大赛5月开赛。原定于6月19日至21日在广东省深圳市举办的线下半决赛、总决赛和颁奖典礼，因新冠疫情影响延期至11月27-29日。
          </p>
        </div>
      </div>
      <!-- 竞赛规则 -->
      <div class="item">
        <Title title="竞赛规则" />
        <div class="con" :style="znbjTwo">
          <p>
            第二届“XXX”网络安全大赛（以下简称“第二届‘网鼎杯’大赛”）是由国家网络与信息安全信息通报中心、深圳市人民政府、广东省公安厅联合支持，深信服科技股份有限公司、北京永信至诚科技股份有限公司联合主办，阿里巴巴（中国）网络技术有限公司、百度在线网络技术（北京）有限公司、奇安信科技集团股份有限公司、清华大学网络科学与网络空间研究院、深圳市腾讯计算机系统有限公司、中国科学院信息工程研究所联合协办的国家顶级网络安全赛事。“网鼎杯”网络安全大赛2018年在北京举办了第一届，共吸引了全国7000支队伍、2.25万人参赛，是我国迄今为止规模最大、覆盖面最广的一次高水平网络安全大赛，这对于进一步磨砺网络安全攻防能力，发现网络安全专门人才，提升全社会网络安全意识具有重要意义。
          </p>
        </div>
      </div>
      <!-- 得分排名 -->
      <div class="item">
        <Title title="得分排名" />
        <div class="con" :style="znbjTwo">
          <p>
            第二届“XXX”网络安全大赛（以下简称“第二届‘网鼎杯’大赛”）是由国家网络与信息安全信息通报中心、深圳市人民政府、广东省公安厅联合支持，深信服科技股份有限公司、北京永信至诚科技股份有限公司联合主办，阿里巴巴（中国）网络技术有限公司、百度在线网络技术（北京）有限公司、奇安信科技集团股份有限公司、清华大学网络科学与网络空间研究院、深圳市腾讯计算机系统有限公司、中国科学院信息工程研究所联合协办的国家顶级网络安全赛事。“网鼎杯”网络安全大赛2018年在北京举办了第一届，共吸引了全国7000支队伍、2.25万人参赛，是我国迄今为止规模最大、覆盖面最广的一次高水平网络安全大赛，这对于进一步磨砺网络安全攻防能力，发现网络安全专门人才，提升全社会网络安全意识具有重要意义。
          </p>
        </div>
      </div>
      <!-- 奖项设置 -->
      <div class="item">
        <Title title="奖项设置" />
        <div class="con jx" :style="znbjFour">
          <p class="tit">
            第二届“XXX”大赛分为奖金奖励和荣誉奖励，设置一、二、三等奖、优秀领队奖、杰出领队奖、优秀组织奖等，并为入围线下总决赛的选手发放网鼎杯优秀人才证书和网络安全高端人才证书。赛事总奖金62万元人民币。具体奖项设置如下：
          </p>
          <div class="jx">
            <p>总决赛</p>
            <ul>
              <li>一等奖：（1支队伍）：100000元/队</li>
              <li>二等奖：（5支队伍）：40000元/队</li>
              <li>三等奖：（9支队伍）：20000元/队</li>
            </ul>
          </div>
          <div class="jx">
            <p>杰出领队奖（50名）</p>
            <ul>
              <li>
                入围总决赛的所有参赛队伍的领队，将获得“解除领队奖”个人证书。
              </li>
            </ul>
          </div>
          <div class="jx">
            <p>网络安全高端人才（24名）</p>
            <ul>
              <li>
                一、二等奖的参赛队员，将获得“网络安全高端人才”个人证书。
              </li>
            </ul>
          </div>
          <div class="jx">
            <p>优秀领队奖（200名）</p>
            <ul>
              <li>
                入围线下半决赛且总分排名前200名参赛队伍的领队，每人发放”优秀领队奖“个人证书。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 其他 -->
      <div class="item">
        <Title title="其他" />
        <div class="con" :style="znbjFive">
          <p>本大赛解释权归XXX所有</p>
        </div>
      </div>
    </div>
    <!-- 组织单位 -->
    <div class="unit">
      <h3>
        <span :style="zzdwBg">
          组织单位
        </span>
      </h3>
      <ul :style="rightBg">
        <li :style="blueBg">
          <p>冠名单位</p>
          <span>XXXXX单位</span>
        </li>
        <li :style="blueBg">
          <p>主办单位</p>
          <span>XXXXX单位</span>
          <span>XXXXX单位</span>
          <span>XXXXX单位</span>
          <span>XXXXX单位</span>
        </li>
        <li :style="blueBg">
          <p>承办单位</p>
          <span>XXXXX单位</span>
          <span>XXXXX单位</span>
        </li>
        <li :style="blueBg">
          <p>技术支持</p>
          <span>XXXXX单位</span>
          <span>XXXXX单位</span>
        </li>
        <li :style="blueBg">
          <p>联系方式</p>
          <span>0000-123456</span>
          <img src="@/assets/img/list/list_two/ewm.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from '@/components/guide/title'
export default {
  components: {
    Title
  },
  data() {
    return {
      // 赛事指南背景图
      backgroundFirst: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_two/charts_bg.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 背景一
      znbjOne: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/znbj_one.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 背景二
      znbjTwo: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/znbj_two.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 背景四
      znbjFour: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_two/znbj_four.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 背景五
      znbjFive: {
        backgroundImage:
          'url(' +
          require('../../assets/img/list/list_two/znbj_five.png') +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 组织单位背景
      zzdwBg: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/zzdw_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 组织单位右侧大背景
      rightBg: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/right_bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      // 蓝色
      blueBg: {
        backgroundImage:
          'url(' + require('../../assets/img/list/list_two/blue.png') + ')',
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
.guide {
  position: relative;
  width: 100%;
  padding: 60px 350px;
  padding-bottom: 50px;
  .img {
    position: absolute;
    z-index: 99;
    top: -30px;
    left: 50px;
    img {
      width: 184px;
      height: 85px;
    }
  }
  .wrap {
    width: 100%;
    // background-color: #00f;
    .item {
      margin-bottom: 65px;
      .con {
        padding: 35px;
        font-size: 14px;
        line-height: 24px;
        text-indent: 2em;
        .tit {
          padding-bottom: 30px;
        }
        .jx {
          padding-bottom: 30px;
          p {
            font-size: 18px;
            padding-bottom: 15px;
          }
        }
      }
    }
  }
  .unit {
    position: absolute;
    right: 0;
    top: 126px;
    width: 320px;
    // background-color: #00f;
    span {
      display: block;
    }
    h3 {
      display: flex;
      justify-content: flex-end;
      height: 52px;
      line-height: 52px;
      text-align: right;
      span {
        width: 172px;
        padding-right: 20px;
        box-sizing: border-box;
        font-size: 24px;
        color: #fff;
      }
    }
    ul {
      margin-top: -4px;
      padding: 36px 0 30px;
      box-sizing: border-box;
      li {
        margin-bottom: 35px;
        padding: 36px 38px;
        p {
          padding-bottom: 12px;
          font-size: 22px;
        }
        span {
          padding: 0 0 12px 0;
          font-size: 17px;
        }
        img {
          width: 78px;
          height: 78px;
        }
      }
    }
  }
}
</style>
