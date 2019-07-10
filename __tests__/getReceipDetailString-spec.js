const getReceipDetailString = require('../func/getReceipDetailString')

it('should be expect = expected when invoke getReceipDetailString given inputs = inputs', () => {
  const inputs = [
    {id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1, totalPrice: 18},
    {id: "ITEM0013", name: "肉夹馍", price: 6, count: 2, totalPrice: 12},
    {id: "ITEM0022", name: "凉皮", price: 8, count: 1, totalPrice: 8}
  ]
  //when
  const result = getPromotionDetailString(inputs)
  const expected = "黄焖鸡 x 1 = 18元\n" +
    "肉夹馍 x 2 = 12元\n" +
    "凉皮 x 1 = 8元\n"
  //then
  expect(result).toStrictEqual(expected)
});
