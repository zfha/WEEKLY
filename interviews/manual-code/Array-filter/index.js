// thisArg 表示执行callback的时候，用于this的值
Array.prototype.zFilter = function (filterFn, thisArg) {
  if (this === undefined) {
    throw new TypeError('this cannot be null or undefined');
  }
  if (typeof filterFn !== 'function') {
    throw new TypeError(filterFn + 'is not a function');
  }

  const origin = Object(this);
  // >>>0 保证len为number，且为正整数
  const len = origin.length >>> 0;
  const res = [];
  for (let i = 0; i < len; i++) {
    if (filterFn.call(thisArg, origin[i], i, origin)) {
      res.push(origin[i]);
    }
  }
  return res;
};
