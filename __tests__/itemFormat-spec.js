const itemFormat = require('../func/itemFormat')

it('should be expect = expected when invoke itemFormat given inputs = inputs', () => {
  //given
  const inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]
  //when
  const result = itemFormat(inputs)
  const expected = {ITEM0001: "1", ITEM0013: "2", ITEM0022: "1"}
  //then
  expect(result).toStrictEqual(expected)
});
