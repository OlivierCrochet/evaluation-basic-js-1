var mapCustomer = function(customer) {
  var output = {
    firstname: customer.firstname || 'John',
    lastname:  customer.lastname || 'Doe',
    products: customer.products || [],
    moneySpent: 0 
    }
  if (customer.products) {
    for(let i = 0; i < customer.products.length; i++){
      var product = customer.products[i]
      output.moneySpent += product.price
    }
  }
  return output
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
