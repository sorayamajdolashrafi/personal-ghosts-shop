// IMPORT MODULES under test here:
import { renderLineItems } from '../cart/render-line-items.js';
import { renderGhost } from '../products/renderGhost.js';
import { findById, calcLineItem, calcOrderTotal } from '../utils.js';
import { getCart, clearCart, saveCart } from '../cart-utils.js';

const test = QUnit.test;

// Test for renderGhost()
test('should take in ghost and return li', (expect) => {
    
    const skaterGhost = {
        id: 1,
        name: 'Skater Ghost',
        img: 'skater-ghost.png',
        description: 'Do you want to go fast? This rad boy can take you for a ride.',
        category: `skill`,
        price: 4,
        priceCurrency: 'skateboard wheels',
    };
    
    const expected = `<li class="ghost-item"><h3 class="ghost-name">Skater Ghost</h3><img class="ghost-image" src="../assets/product-images/skater-ghost.png" alt="Skater Ghost"><p class="ghost-description">Do you want to go fast? This rad boy can take you for a ride.</p><p class="ghost-category">category: skill</p><p class="ghost-price">offering: 4 skateboard wheels</p><div class=\"ghost-button-div\"><select class=\"ghost-dropdown\" id=\"dropdown\"><option id=\"dropdownQuantity\" value=\"1\">1</option><option id=\"dropdownQuantity\" value=\"2\">2</option><option id=\"dropdownQuantity\" value=\"3\">3</option><option id=\"dropdownQuantity\" value=\"4\">4</option><option id=\"dropdownQuantity\" value=\"5\">5</option><option id=\"dropdownQuantity\" value=\"6\">6</option><option id=\"dropdownQuantity\" value=\"7\">7</option><option id=\"dropdownQuantity\" value=\"8\">8</option><option id=\"dropdownQuantity\" value=\"9\">9</option><option id=\"dropdownQuantity\" value=\"10\">10</option></select><button value=\"1\">add to cart</button></div></li>`;

    const actual = renderGhost(skaterGhost);

    expect.equal(actual.outerHTML, expected);
});

// Test for findById()
test('findById should connect id 6 of the cart item to ghost name with the same id and return Plant Ghost', (expect) => {

    const ghosts = [
        {
            id: 5,
            name: 'Fruit Ghost',
            img: 'fruit-ghost.png',
            description: 'This total sweetheart of a ghost knows all the seasonal fruits and where to find them and makes sure you know too.',
            category: `food`,
            price: 'A handful of boysenberries',
        },
        {
            id: 6,
            name: 'Plant Ghost',
            img: 'plant-ghost.png',
            description: 'Is your home a graveyard for house plants? This ghost cares for spirits of all the plants you have killed.',
            category: `skill`,
            price: '7 leaves',
        },
        {
            id: 7,
            name: 'Bad Photo Ghost',
            img: 'bad-photo-ghost.png',
            description: `Bad Photo Ghost knows all your best angles, and they artistically blur you in every photo you look bad in.`,
            category: `care`,
            price: '15 rolls of film',
        },       
    ];

    const expected = {
        id: 6,
        name: 'Plant Ghost',
        img: 'plant-ghost.png',
        description: 'Is your home a graveyard for house plants? This ghost cares for spirits of all the plants you have killed.',
        category: `skill`,
        price: '7 leaves',
    };

    const actual = findById(6, ghosts);

    expect.deepEqual(actual, expected);

});

// Test calcLineItem
test('calcLineItem should multiply the quantity, 6, by the price, 7, and return a total of 35', (expect) => {

    const quantity = 6;
    const price = 7;

    const expected = 42;

    const actual = calcLineItem(quantity, price);

    expect.equal(actual, expected);
});

// Test renderLineItems
test('renderLineItem should take in a cart item and returns table elements', (expect) => {

    const cartData = {
        id: 6,
        quantity: 3,        
    };
    const ghosts = {
        id: 6,
        name: 'Plant Ghost',
        img: 'plant-ghost.png',
        description: 'Is your home a graveyard for house plants? This ghost cares for spirits of all the plants you have killed.',
        category: `skill`,
        price: 7,
        priceCurrency: 'leaves',
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr class="cart-item"><td class="product">Plant Ghost</td><td class="quantity">3</td><td class="subtotal">21 leaves</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cartData, ghosts);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// Test calcOrderTotal
test('The total sum of the subtotals 21, 1, and 60 returns 81', (expect) => {

    const cartData = [
        {
            id: 6,
            quantity: 3,        
        },
        {
            id: 9,
            quantity: 1,
        },
        {
            id: 3,
            quantity: 6,
        }
    ];
    const ghosts = [
        {
            id: 3,
            name: 'Opossum Ghost',
            img: 'opossum-ghost.png',
            description: `Have you ever needed to get out of a situation by playing dead? Well, Opossum Ghost will help you play the deadest of dead and keep you safe.`,
            category: `care`,
            price: 10,
            priceCurrency: 'worms',
        },
        {
            id: 6,
            name: 'Plant Ghost',
            img: 'plant-ghost.png',
            description: 'Is your home a graveyard for house plants? This ghost cares for spirits of all the plants you have killed.',
            category: `skill`,
            price: 7,
            priceCurrency: 'leaves',
        },
        {
            id: 9,
            name: 'Human Ghost',
            img: 'human-ghost.png',
            description: `Wrap your lonely heart in the tender embrace of Human Ghost.`,
            category: `care`,
            price: 1,
            priceCurrency: 'bottle of rose water',
        },
    ];

    const expected = `total: 82 pieces for the offering`;

    const actual = calcOrderTotal(cartData, ghosts);

    expect.equal(actual, expected);
});

// Test for getCart
test('getCart should check if there is a cart, if so return cart', (expect) => {

    const cartData = [
        {
            id: 6,
            quantity: 3,        
        },
        {
            id: 9,
            quantity: 1,
        },
        {
            id: 3,
            quantity: 6,
        }
    ];
    const stringCartData = JSON.stringify(cartData);
    localStorage.setItem('cartData', stringCartData);

    const expected = [
        {
            id: 6,
            quantity: 3,        
        },
        {
            id: 9,
            quantity: 1,
        },
        {
            id: 3,
            quantity: 6,
        }
    ];

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

// Test for clearCart
test('clearCart should empty localStorage and return an empty cart array.', (expect) => {

    const cartData = [
        {
            id: 6,
            quantity: 3,        
        },
        {
            id: 9,
            quantity: 1,
        },
        {
            id: 3,
            quantity: 6,
        }
    ];
    const stringCartData = JSON.stringify(cartData);
    localStorage.setItem('cartData', stringCartData);
    clearCart();

    //Arrange
    // Set up your arguments and expectations
    const expected = '[]';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = localStorage.getItem('cartData');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


/*test('expectation', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result

});*/