const getReceipDetailString = (item_from_getItems => {
  let result = "";
  item_from_getItems.forEach(item => {
    result += `${item.name} x ${item.count} = ${item.totalPrice}元\n`
  })
  return result;
})

module.exports = getReceipDetailString
