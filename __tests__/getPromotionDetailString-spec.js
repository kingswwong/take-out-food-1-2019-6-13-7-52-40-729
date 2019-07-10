const getPromotionDetailString = require('../func/getPromotionDetailString')


it('should be expect = expected when invoke getPromotionDetailString given inputs = inputs', () => {
  //given
  const inputs = {save_price: 13, total_price: 25, type: "指定菜品半价(黄焖鸡，凉皮)"}
  //when
  const result = getPromotionDetailString(inputs)
  const expected = "-----------------------------------\n" +
    "使用优惠:\n" +
    "指定菜品半价(黄焖鸡，凉皮)，省13元\n"
  //then
  expect(result).toStrictEqual(expected)
});
