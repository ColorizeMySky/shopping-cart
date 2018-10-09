My result of this project:
http://colorizemysky-shopping-cart.surge.sh

# shopping-cart

A simple shopping cart frontend written. In this exercise, you will be implementing a Shopping Cart Page. Provided for you is a simple HTML page with Bootstrap that shows items and a section for the shopping cart your task is to implement the following features:

* An Add to Cart Button for each item
* Display the items in the shopping cart.
* Display the subtotal, tax, and total (you can assume just one percentage like 10% for tax no matter what).
* Display a form for the user to enter their Shipping Information.
* A Submit button that will alert that the order has been sent (note, nothing is actually sent, just testing it does something when clicked.

## Bonus Missions

* Implement Validation ensure the fields are filled with correct type of information.
* Calculate the Tax Rate based on Zip Code via a website called Avalara.

## Tips:

In this assignment, a lot of data will be represented on the web page. It's a good practice to think of the "state" of the web page, that is, what are the variables and data that you need to know. For example, you may want to represent the order items as an array of objects where each object contains the name and price for display.

```javascript
const orderItems = [
  {
    name: 'Some Item',
    price: 9.99
  },
  // ...
];
```

From there, you can "render" the cart by writing a function that takes this information and constructs it in a certain spot. Any changes,  clears out the parent element, and re-renders using the same function. You can clear the parent element by doing the following in jQuery.

```javascript
$(SOME_SELECTOR).empty()
```

In addition, for displaying price, the [`toFixed` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) is quite useful.
