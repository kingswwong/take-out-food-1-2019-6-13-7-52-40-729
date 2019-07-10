const getItem = id => {
  return loadAllItems().filter(item => item.id === id)[0]
}

module.exports = getItem
