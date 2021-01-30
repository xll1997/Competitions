/*
 * @Descripttion: 
 * @version: 
 * @Date: 2020-09-04 17:49:00
 */
// const BaseUrl = 'http://localhost:9099/uajax/fileupload/getIcon?icon='

// const BaseUrl = 'http://106.39.31.53:9099/uajax/fileupload/getIcon?icon='
// const BaseUrl = 'http://106.39.31.49:9099/uajax/fileupload/getIcon?icon='
const BaseUrl = 'http://192.168.1.121:9099/uajax/fileupload/getIcon?icon='
// const BaseUrl = 'http://192.168.1.156:9099/uajax/fileupload/getIcon?icon='
// const EMPTY = require("../imgae/share/banner_1.png");

export default {
  /**
   * @method 格式化图片
   * */
  formatImg(url) {
    if (url) {
      if (url) return BaseUrl + url
    }
    return EMPTY
  }
}
