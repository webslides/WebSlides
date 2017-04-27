import Keys from '../../src/js/utils/keys';

test('Keys are present', () => {
  expect(Keys.ENTER).toBe(13);
  expect(Keys.SPACE).toBe(32);
  expect(Keys.RE_PAGE).toBe(33);
  expect(Keys.AV_PAGE).toBe(34);
  expect(Keys.END).toBe(35);
  expect(Keys.HOME).toBe(36);
  expect(Keys.LEFT).toBe(37);
  expect(Keys.UP).toBe(38);
  expect(Keys.RIGHT).toBe(39);
  expect(Keys.DOWN).toBe(40);
});
