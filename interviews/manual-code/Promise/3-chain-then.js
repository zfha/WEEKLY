// 1. then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
// 2. promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；「规范 Promise/A+ 2.2.7」
// 3. 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；
// 4. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.2.7.2」
// 5. 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise 如果成功，就走下一个 then 的成功；如果失败，就走下一个 then 的失败；如果抛出异常，就走下一个 then 的失败；「规范 Promise/A+ 2.2.7.3、2.2.7.4」
// 6. 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.3.1」
// 7. 如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，则第一次调用优先，其他所有调用被忽略；「规范 Promise/A+ 2.3.3.3.3」

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
    this.onFulfilleds = [];
    this.onRejecteds = [];

    let resolveFn = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.onFulfilleds.map((fn) => fn());
      }
    };

    let rejectFn = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejecteds.map((fn) => fn());
      }
    };
    try {
      executor(resolveFn, rejectFn);
    } catch (e) {
      rejectFn(e);
    }
  }
  then(onFulfilled, onRejected) {
    // 如果传入的不是一个function，则穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v;
    // 如果传入的不是一个function，则由下一个then进行接收
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error;
          };

    return new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.status === PENDING) {
        this.onFulfilleds.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resovlePromise(x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejecteds.push(() => {
          setTimeout(() => {
            try {
              let y = onRejected(this.reason);
              resovlePromise(y, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
  }
}

function resovlePromise(x, resolve, reject) {
  if (x instanceof Promise) {
    x.then(
      (y) => {
        resovlePromise(y, resolve, reject);
      },
      (error) => {
        reject(error);
      }
    );
  } else {
    resolve(x);
  }
}

module.exports = Promise;
