///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalPrice = cartTotal + (cartTotal * (tax + 1)) - couponValue
    return finalPrice
}
console.log(calcFinalPrice(15, 3, .05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
Name: to track order and verify payments through credit cards
Billing Address: might be different than the shipping address
Shipping Address: where we will send the shipment to
Phone Number: in case we need to contact the customer
Order: what the customer wants
Prices: total amount to be charge to the customer
Credit Card Info: for payment

Name: String
Billing Address: String
Shipping Address: String
Phone Number: Number
Order: Array
prices: number
Credit Card Info: array

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: `Chaz`,
    deliveryAddress: `700 Digimon Lane`,
    billingAddress: `420 Pokemon Highway`,
    order: [`Can of beans`, 'Can of tomato sauce'],
    totalPrice: [1.50, 1.75],
    phoneNumber: 5558675309,
    creditCardInfo: [6942055558008135, 0825, 420],
}
console.log(customer)
