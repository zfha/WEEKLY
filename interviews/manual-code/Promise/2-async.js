// Promise 的 异步功能
// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.executor = executor;
    this.value;
    this.reason;
    this.onFulfilled;
    this.onRejected;

    let resolveFn = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.onFulfilled(value);
      }
    };

    let rejectFn = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejected(reason);
      }
    };
    try {
      executor(resolveFn, rejectFn);
    } catch (e) {
      rejectFn(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === PENDING) {
      this.onFulfilled = onFulfilled;
      this.onRejected = onRejected;
    }
  }
}

module.exports = Promise;
