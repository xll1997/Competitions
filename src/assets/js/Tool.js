/*
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 13:51:57
 */
// const BaseUrl = 'http://localhost:9099/'

// const BaseUrl = 'http://106.39.31.53:9099/'
// const BaseUrl = 'http://106.39.31.49:9099/'
// const BaseUrl = 'http://192.168.1.156:9099/'
const BaseUrl = 'http://192.168.1.121:9099/'
// const BaseUrl = 'http://106.39.31.49:9099/'

// const BaseUrl = 'http://49.233.174.102:8088/';
// const DataUrl = 'http://49.233.174.102:8080/Information-submission-new';
const DataUrl = 'http://ccidrobot-sd.cstc.org.cn'
// const EMPTY = require("../imgae/default/empty.png");
import moment from 'moment'
export default {
  /**
   * @method 格式化图片
   * */
  formatImg(url, type) {
    if (url) {
      if (type == 'h5') {
        return DataUrl + url
      } else {
        return BaseUrl + url.split(',')[0]
      }
    }
    return EMPTY
  },

  /**
   * @method 格式化图片
   * */
  formatImgh(url) {
    if (url) {
      // return BaseUrl + 'uajax/fileupload/getIcon?icon=' + url.split(',')[0]
      // return BaseUrl + '/fileupload/getIcon?icon=' + url.split(',')[0]
      return BaseUrl + 'fileupload/getIcon?icon=' + url.split(',')[0]
    }
    // return EMPTY
  },

  /**
   * @method 根据 has key 值深度遍历数组
   * @arr 要遍历的数组
   * @key 要遍历的key
   * @save array 要保存的key
   * @clear 清除全局变量，必须传 true
   * */
  arrEachData: [],
  arrEach(arr, key, save, clear) {
    if (clear) {
      this.arrEachData = []
    }
    arr.forEach(item => {
      let obj = {}
      for (let i = 0; i < save.length; i++) {
        obj[save[i]] = item[save[i]]
      }
      this.arrEachData.push(obj)

      if (item[key]) {
        this.arrEach(item[key], key, save)
      }
    })
    return this.arrEachData
  },

  /**
   * 字符串多余打点
   * */
  beautySub(str, len) {
    try {
      var reg = /[\u4e00-\u9fa5]/g, //专业匹配中文
        slice = str.substring(0, len),
        chineseCharNum = ~~(slice.match(reg) && slice.match(reg).length),
        realen = slice.length * 2 - chineseCharNum
      return str.substr(0, realen) + (realen < str.length ? '...' : '')
    } catch (e) {
      return 'err'
    }
  },

  /**
   * 格式化日期
   */
  formatDate(date) {
    return moment(date).format('YYYY-MM-DD')
  }
}
