require('../../Array-filter');

test('Array filter', () => {
  const result = [2, 3, 4, 1].zFilter((a) => a > 2);
  expect(result).toEqual([3, 4]);
});
