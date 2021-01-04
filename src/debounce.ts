/**
 * 函数防抖
 * @param fn
 * @param await
 */
export function debounce(fn, await) {
  let timeId = null;
  return function (...args) {
    let _this = this;
    clearTimeout(timeId);
    timeId = setTimeout(function () {
      fn.apply(_this, args);
    }, await);
  };
}
