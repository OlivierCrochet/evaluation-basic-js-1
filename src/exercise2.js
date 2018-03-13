var mapCustomer = function(customer) {
    let output = customer
    for( let i = 0; i < customer.products.length; i++){
      output.moneySpent += customer.products[i].price
    }
    return output
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
