// 节流函数
export function throttle (fn, delay) {
  let timer = null
  let prevTime = Date.now()
  return function (...args) {
      const remainingTime = delay - (Date.now() - prevTime)
      if (timer) {
          clearTimeout(timer) // 放弃上一次的执行
      }
      if (remainingTime <= 0) {
          fn.apply(this, args)
          prevTime = Date.now()
      } else {
          timer = setTimeout(() => {
              fn.apply(this, args)
              prevTime = Date.now()
          }, remainingTime)
      }
  }
}
