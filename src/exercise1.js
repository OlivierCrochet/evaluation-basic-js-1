var removeNegativeValue = function(values) {
  var output = [];
  var u = 0;
  if (values == undefined){
    return output
  }
  else{
    for ( let i =0; i < values.length; i++) {
      if (values[i] >= 0) {
        output[u] = values[i]
        u +=1
      }
    }
  return output
  }
}


module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
