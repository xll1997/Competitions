/**
 * 公共接口封装
 * */
import axios from '../axios'

export default {
  /**
   * 全部行业
   */
  getIndustryData() {
    return axios.get('/summarize/getIndustryData')
  }
}
