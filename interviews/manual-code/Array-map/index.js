// thisArg 表示执行callback的时候，用于this的值
Array.prototype.zMap = function (callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this cannot be null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }

  const origin = Object(this);
  // >>>0 保证len为number，且为正整数
  const len = origin.length >>> 0;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(callback.call(thisArg, origin[i], i, origin));
  }
  return res;
};
