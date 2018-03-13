var removeNegativeValue = function(values) {
  var output = [];
  for ( let i = 0; i < values.length; i++) {
    if (values[i] >= 0) {
      output[i] = values[i]
    }
  }
  return output
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
