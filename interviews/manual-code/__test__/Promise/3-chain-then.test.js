const Promise = require('../../Promise/3-chain-then');

test('then success', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(1);
  });
  promise.then((value) => {
    expect(value).toBe(1);
  });
});

test('then success', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(1);
  });
  promise.then((value) => {
    expect(value).toBe(1);
  });
});

test('then error', () => {
  new Promise((resolve, reject) => {
    reject('error message');
  }).then(
    (value) => {},
    (reason) => {
      expect(reason).toBe('error message');
    }
  );
});

test('repeat resolve', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(1);
    resolve(2);
  });
  promise.then((value) => {
    expect(value).toBe(1);
  });
});

test('async resolve', () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
  promise.then((value) => {
    expect(value).toBe(1);
  });
});

test('chain then null', (done) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
  promise
    .then((value) => {})
    .then((value) => {
      expect(value).toBe(undefined);
      done();
    });
});

test('chain then penetrate', (done) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
  promise.then().then((value) => {
    expect(value).toBe(1);
    done();
  });
});

test('chain then promise', (done) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
  promise
    .then((value) => {
      return new Promise((resolve, reject) => {
        resolve(2);
      });
    })
    .then((value) => {
      expect(value).toBe(2);
      done();
    });
});
