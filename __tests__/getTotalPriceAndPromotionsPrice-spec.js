const getTotalPriceAndPromotionsPrice = require('../func/getTotalPriceAndPromotionsPrice')

it('should be expect = expected when invoke getTotalPriceAndPromotionsPrice given inputs = inputs', () => {
  //given
  const inputs = [
    {id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1, totalPrice: 18},
    {id: "ITEM0013", name: "肉夹馍", price: 6, count: 2, totalPrice: 12},
    {id: "ITEM0022", name: "凉皮", price: 8, count: 1, totalPrice: 8}
  ]
  //when
  const result = getTotalPriceAndPromotionsPrice(inputs)
  const expected = {save_price: 13, total_price: 25, type: "指定菜品半价(黄焖鸡，凉皮)"}
  //then
  expect(result).toStrictEqual(expected)
});
