import Assignment from './components/Assignment'
import { version } from '../package.json'

// 定义 install 方法
const install = function (Vue) {
  Vue.component('Assignment', Assignment)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default  Object.assign(Assignment, {
  // 版本信息
  version,
  // 导出 install 方法用于支持插件
  install
})

