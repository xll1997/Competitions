<!-- 
  * @Descripttion: 2021-01-20
  * @version:
  * @Date: 登录页面主战场 -- 点击提交wp
  -->
<template>
  <div class="total">
    <div class="survey">
      <!-- <i @click="close" class="isClose">X</i> -->
      <h2>
        <span></span>
        请上传Word格式的WP文档
      </h2>
      <p class="uploadDiv">
        <a-upload-dragger
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">点击此处上传Word文件</p>
        </a-upload-dragger>
      </p>
      <div>
        <span @click="ok">提交</span>
        <span @click="close">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    WPData: Object
  },
  data() {
    return {
      UploadUrl: '',
      UploadName: ''
    }
  },
  computed: {},
  watch: {},
  created() {
    this.mask()
  },
  mounted() {
    console.log('WPData', this.WPData)
  },
  methods: {
    mask() {
      //使其遮罩下方内容不可滚动
      document.body.style.overflow = 'hidden'
    },
    close() {
      document.body.style.overflow = 'auto'
      this.$emit('wpStatus', false)
    },
    ok() {
      if (this.UploadUrl != '' && this.UploadName != '') {
        document.body.style.overflow = 'auto'
        this.$emit('wpStatus', false)
        console.log('this.UploadUrl', this.UploadUrl)
        console.log('this.UploadName', this.UploadName)
      } else {
        this.$message.warning('你还未上传Word文件！！');
      }
    },
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList)
        this.UploadUrl = info.file.response.url
        this.UploadName = info.file.response.name
        // console.log('uploading文件上传地址', info.file.response.url)
        // console.log('uploading文件上传name', info.file.response.name)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} 文件上成功.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} 文件上传失败.`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.total {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .survey {
    position: relative;
    // left: 150px;
    // bottom: 140px;
    width: 450px;
    // height: 336px;
    padding: 35px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    background-color: #191652;
    color: #fff;
    .isClose {
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      text-align: center;
      line-height: 18px;
      font-weight: 800;
      color: #191652;
      background-color: #fff;
      cursor: pointer;
    }
    h2 {
      color: #fff;
      font-size: 18px;
      // padding-bottom: 23px;
      span {
        display: inline-block;
        width: 3px;
        height: 17px;
        background-color: #44a7fc;
        margin-right: 15px;
      }
    }

    .uploadDiv {
      padding: 40px 0;
      // font-size: 20px;
      text-align: center;
      /deep/.ant-upload.ant-upload-drag {
        // border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
      }
      /deep/.ant-upload-list .ant-upload-list-item {
        background-color: rgba(255, 255, 255, 0.7);
      }
    }

    div {
      text-align: center;
      span {
        display: inline-block;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        line-height: 30px;
        background-color: rgba(255, 255, 255, 0.7);
        color: #333;
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
        &:nth-child(2) {
          background-color: rgba(255, 162, 0, 0.7);
          color: #fff;
          margin-left: 20px;
        }
        &:nth-child(2):hover {
          background-color: rgba(255, 162, 0, 1);
        }
      }
    }
  }
}
</style>
