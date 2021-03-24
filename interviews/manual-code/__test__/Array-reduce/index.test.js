require('../../Array-reduce');

test('Array reduce', () => {
  const result = [2, 3, 4, 1].zReduce((sum, a) => sum + a, 10);
  expect(result).toBe(20);
});

test('Array reduce no initialValue', () => {
  const result = [2, 3, 4, 1].zReduce((sum, a) => sum + a);
  expect(result).toBe(10);
});
