# E-Commerce

## //What am I selling?
    - Ghosts?
    - Art?
    - Tigers?

    Ghosts, we're selling ghosts.

## //Home
    ### html
        - header
        //- button that links to products page
    
    ### js
        //- DOM elements
            //- button
        //- Add event listener to link to products page

    ### css
        //- Basic style
            //- font
            //- background color
            //- text color

## //Products
    ### html
        //- <ul> to hold the listings
        //- Inital ghost layout posting to be able to visualize it.
            //- Title
            //- Image
            //- Description
            //- Price
            //- Button to add to cart.
                - Value is the product id.

    ### js
        //- Object Literal
            //- Write out object literals for each product
            //- Store in a variable with same name as product id. 
            
            These objects are key/value pairs whose values uniquely describe each product. All products should have exactly the same keys!

        //- Create a variable that is an array of all of your products
        //- Export this array.

        - TDD
            //1. Copy/paste the html element
            //2. copy/paste the product data for one listing to use as the input of the function
            //3. Using DOM API, create a static example. Start by creating the top level element and work down (like the warmup).
            //4. Make the test pass, pay attention to the details.

        - Generate Product List
            //- Import functions and DOM elements
            //- Locate where the products will go <ul>
            //- Loop through the data.
                //1. create a variable that is the singular of the list and assign based on the current array index 
                    const ghost = ghosts[i];
                //2. Pass to your DOM generation function and capture reult in variable
                //3. Append to the top-level list element.

# Cart

//notes:
    1. Get the ghost id from the cart.
    2. Loop through the ghosts array.
    3 For each ghost check the id
        - if it is a match with the item in the cart, grab the price
        - if not, move on to the next item.
    4. Store price
    5. Get quantity from the cart object
    6. store the quantity
    7. totalPrice is now stored quantity x stored price.

    findById function (id, array) {
       // return 'the item whose id matches the supplied id';
       // iterate/loop through the array

       for (let item of array) {
           if (item.id === id) {
               return item;
           }
       }

    }

    expect.deepEqual(actual, expected) for comparing an object in TDD//

## //Design Cart
    //- Static design for cart table
        //- header
            //- product name
            //- quantity
           //- price total
        //- footer for order total.
    //- Button to place order.

## //Cart Data
    //- Write an array literal that contains object literals for a few ordered in the cart.
        //- Dummy data
    //- Export array.

## //TDD findById Function
    - in utils.js write a function that connects the id to the ghost.name with the same id.
        -return null if no match.
    - might need expect.deepequal to complete test

## //TDD calcLineItem Function
    - in utils.js write a function that takes the quantity and price and returns the total
        -Might need to round result with Math.round(amount * 100) /100

## //TDD DOM Render Function
    //- render-line-items.js 
    //- This function takes a cart line item and puts into the html
        //- Copy html from the page
        //- Copy cart line data for the example
        //- Use DOM API to create a static example from the top level element <tr> for line item
        //- make test pass

## //Generate Shopping Cart
    //- Import data, cart and ghosts, DOM generation function and utility functions
    //- Locate the table where the items go
    //- Loop through the data
        //- Create a variable based on the current array index
        //- Use findById to find product for the line item
        //- Pass these to DOM generation function and capture result in variable
        //- Append to the table

## //TDD calcOrderTotal
    //- in utils.js take the cart array and ghosts array.
    //- Calculate the total of your cart data.
        //- Create a variable to hold the total
        //- Loop the line items with calcLineItem function and add to order total
        //- Return order total
        //- Might need to round

## //Add Order Total to Table
    - in cart.js import calcOrderTotal
    - Use function to calculate cart total
    - Display in total element.



# Data Persistence

## //Write Functions in cart-utils.js
    //- getCart
        - To retrieve existing shopping cart from localStorage
            - If there is no cart in data in localStorage use an empty array [].
            //- If there is cart data in localStorage, turn into array using JSON.parse
    //- addToCart
       // - Check if shopping cart already has the item with findById()
           // - If it does, increment value
            //- If it does not exist create a new line item with:

                const lineItem = {
                    id: <product-id>,
                    quantity: 1,
                };
            //- Add new line to cart.
    //- saveCart
        //- Save the modified cart array back in localStorage to serialize with JSON.stringify before saving.
            //- stringify cart
            //- save to local storage.
    //- clearCart

## //Add Product to Shoping Cart
    - In the rendersGhosts add an event listener to the button.
        1. getCart
        //2. addToCart- only needed to this function because it uses getCart and saveCart.
        3. saveCart

## //Get Shopping Cart from localStorage on Shopping Cart Page
    //- Get cart data from local storage.

## //Place Order
    //- If cart is empty disable place order button
    - In the event listener
        //- display an 'alert' with the contents of the cart (JSON.stringify(cart, true, 2))
        - Remove cart from local storage (.removeItem)
        - Redirect users back to home page.

## //Stretch: Add Quantity of Products
    //- Add a quantity drop-down to renderGhosts that is added to the cart when add button is clicked.

## Stretch: TDD
    -Write tests for
        - getCart
        - clearCart
        - saveCart