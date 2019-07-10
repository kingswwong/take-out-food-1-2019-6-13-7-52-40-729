const getPromotionDetailString = (total_price_and_promotions_price => {
  let result = ""
  if (total_price_and_promotions_price.save_price > 0) {
    result += "-----------------------------------\n使用优惠:\n"
    result += `${total_price_and_promotions_price.type}，省${total_price_and_promotions_price.save_price}元\n`
  }
  return result;
})

module.exports = getPromotionDetailString


"============= 订餐明细 =============\n" +
"黄焖鸡 x 1 = 18元\n" +
"肉夹馍 x 2 = 12元\n" +
"凉皮 x 1 = 8元\n" +
"-----------------------------------\n" +
"使用优惠:\n" +
"指定菜品半价(黄焖鸡，凉皮)，省13元 \n" +
"-----------------------------------\n" +
"总计：25元\n" +
"==================================="

"============= 订餐明细 =============\n" +
"黄焖鸡 x 1 = 18元 \n" +
"肉夹馍 x 2 = 12元 \n" +
"凉皮 x 1 = 8元 \n" +
"-----------------------------------\n" +
"使用优惠:\n" +
"指定菜品半价(黄焖鸡，凉皮)，省13元\n" +
"-----------------------------------\n" +
"总计：25元\n" +
"==================================="
