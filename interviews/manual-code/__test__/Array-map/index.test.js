require('../../Array-map');

test('Array map', () => {
  const result = [2, 3, 4, 1].zMap((a) => a * 2);
  expect(result).toEqual([4, 6, 8, 2]);
});
