const Promise = require('../../Promise/2-async');

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
  const promise = new Promise((resolve, reject) => {
    reject('error message');
  });
  promise.then(
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

test('async resolve', (done) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
  promise.then((value) => {
    expect(value).toBe(1);
    done();
  });
});
