const getTotalPriceAndPromotionsPrice = (items) => {
  let promotions = loadPromotions()[1].items;
  let before_promotion_price = items.reduce((re, cur) => {
    return re + cur.totalPrice;
  }, 0);
  let promotion_price_in_type_1 = before_promotion_price >= 30 ?  6 : 0;
  let temp = []
  let promotion_price_in_type_2 = items.reduce((re, cur) => {
    if (promotions.indexOf(cur.id) !== -1) {
      re += cur.totalPrice / 2
    }
    return re;
  }, 0)
  let result = {};
  result.save_price = promotion_price_in_type_1 > promotion_price_in_type_2 ? promotion_price_in_type_1 : promotion_price_in_type_2;
  result.total_price = before_promotion_price - result.save_price;
  result.type = promotion_price_in_type_1 > promotion_price_in_type_2 ? "满30减6元" : "指定菜品半价(黄焖鸡，凉皮)"
  return result;
}

module.exports = getTotalPriceAndPromotionsPrice
