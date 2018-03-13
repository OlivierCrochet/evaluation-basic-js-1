var applyMap = function(inputValues, inputMaps) {
  var output = []
  if (inputValues == undefined || inputMaps == undefined) {
    return output
  }else{
  for( let i = 0; i < inputMaps.length; i++)
    var functionMap = inputMaps[i]
    var resultMap = []
    if (inputValues) {
      for( let i = 0; i < inputValues.length; i++){
        var value
        inputValues.map(inputMaps[i])
      }
    }
  return inputValues
  }
}

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
