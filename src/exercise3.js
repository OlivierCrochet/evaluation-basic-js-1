var applyMap = function(inputValues, inputMaps) {
  var output = []
  if (inputValues == undefined || inputMaps == undefined) {
    return output
  }
  for( let i =0; i < inputMaps; i++)
  inputValues[i].map(inputMaps[i])
  return inputValues
}

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
