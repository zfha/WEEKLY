// thisArg 表示执行callback的时候，用于this的值
Array.prototype.zReduce = function (callback, initialValue) {
  if (this === undefined) {
    throw new TypeError('this cannot be null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }

  const origin = Object(this);
  // >>>0 保证len为number，且为正整数
  const len = origin.length >>> 0;
  let i = 0;
  let result = initialValue !== undefined ? initialValue : origin[i++];
  for (; i < len; i++) {
    result = callback.call(undefined, result, origin[i], i, origin);
  }
  return result;
};
