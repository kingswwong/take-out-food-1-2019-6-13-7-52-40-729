const getItem = require('../func/getItem')

it('should be expect = expected when invoke getItem given inputs = inputs', () => {
  //given
  const inputs = "ITEM001"
  //when
  const result = getItem("ITEM001")
  const expected = {id: "ITEM0001", name: "黄焖鸡", price: 18}
  //then
  expect(result).toStrictEqual(expected)
});
