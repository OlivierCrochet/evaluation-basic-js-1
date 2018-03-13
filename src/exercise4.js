var i18nText = function(inputFunction, text) {
  var result = function(name) {
    return fonctionInit(text, name)
  }
  return result
}

module.exports = {
  title: 'Exercise 4',
  run: i18nText
}
