const itemFormat = items => {
  let result = {}
  items.forEach(item => {
    item = item.replace(/\s/ig, '')
    let index = item.indexOf("x");
    let id = item.substring(0, index);
    let count = item.substring(index + 1);
    result[id] = count;
  })
  return result;
}

const getItem = id => {
  return loadAllItems().filter(item => item.id === id)[0]
}

const getItems = (item_format_data) => {
  let result = [];
  Object.keys(item_format_data).forEach(id => {
    let temp_item = getItem(id);
    temp_item.count = parseInt(item_format_data[id])
    temp_item.totalPrice = parseInt(temp_item.count * temp_item.price)
    result.push(temp_item)
  })
  return result
}

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

const getReceipDetailString = (item_from_getItems => {
  let result = "";
  item_from_getItems.forEach(item => {
    result += `${item.name} x ${item.count} = ${item.totalPrice}元\n`
  })
  return result;
})

const getPromotionDetailString = (total_price_and_promotions_price => {
  let result = ""
  if (total_price_and_promotions_price.save_price > 0) {
    result += "-----------------------------------\n使用优惠:\n"
    result += `${total_price_and_promotions_price.type}，省${total_price_and_promotions_price.save_price}元\n`
  }
  return result;
})

function bestCharge(selectedItems) {
  let result = "============= 订餐明细 =============\n";
  const item_format_data = itemFormat(selectedItems);
  const item_from_getItems = getItems(item_format_data);
  const total_price_and_promotions_price = getTotalPriceAndPromotionsPrice(item_from_getItems);
  result += getReceipDetailString(item_from_getItems);
  result += getPromotionDetailString(total_price_and_promotions_price);
  result += "-----------------------------------\n"
  result += `总计：${total_price_and_promotions_price.total_price}元\n`
  result += "===================================";
  return result;
}
