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

module.exports = itemFormat
