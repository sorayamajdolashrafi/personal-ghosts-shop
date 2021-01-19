# E-Commerce

## What am I selling?
    - Ghosts?
    - Art?
    - Tigers?

    Ghosts, we're selling ghosts.

## Home
    ### html
        - header
        //- button that links to products page
    
    ### js
        //- DOM elements
            //- button
        //- Add event listener to link to products page

    ### css
        - Basic style
            - font
            - background color
            - text color

## Products
    ### html
        - <ul> to hold the listings
        - Inital ghost layout posting to be able to visualize it.
            - Title
            - Image
            - Description
            - Details
            - Price
            - Button to add to cart.
                - Value is the product id.

    ### js
        - Object Literal
            - Write out object literals for each product
            - Store in a variable with same name as product id. 
            
            These objects are key/value pairs whose values uniquely describe each product. All products should have exactly the same keys!

        - Create a variable that is an array of all of your products
        - Export this array.

        - TDD
            1. Copy/paste the html element
            2. copy/paste the product dad for one listing to use as the input of the function
            3. Using DOM API, create a static example. Start by creating the top level element and work down (like the warmup).
            4. Make the test pass, pay attention to the details.

        - Generate Product List
            - Import functions and DOM elements
            - Locate where the products will go <ul>
            - Loop through the data.
                1. create a variable that is the singular of the list and assign based on the current array index 
                    const ghost = ghosts[i];
                2. Pass to your DOM generation function and capture reult in variable
                3. Append to the top-level list element.