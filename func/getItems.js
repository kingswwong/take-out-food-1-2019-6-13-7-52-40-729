const getItem = require('../func/getItem')

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

module.exports = getItems
