// IMPORT MODULES under test here:
import { renderGhost } from '../products/renderGhost.js';
import { findById } from '../utils.js';

const test = QUnit.test;

// Test for renderGhost()

test('should take in ghost and return li', (expect) => {
    
    const skaterGhost = {
        id: 1,
        name: 'Skater Ghost',
        img: 'skater-ghost.png',
        description: 'Do you want to go fast? This rad boy can take you for a ride.',
        category: `skill`,
        price: '4 skateboard wheels',
        button: 'add to cart',
    };
    
    const expected = `<li class="ghost-item"><h3 class="ghost-name">Skater Ghost</h3><img class="ghost-image" src="../assets/product-images/skater-ghost.png" alt="Skater Ghost"><p class="ghost-description">Do you want to go fast? This rad boy can take you for a ride.</p><p class="ghost-category">category: skill</p><p class="ghost-price">offering: 4 skateboard wheels</p><button value="1">add to cart</button></li>`;

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

    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 6,
        name: 'Plant Ghost',
        img: 'plant-ghost.png',
        description: 'Is your home a graveyard for house plants? This ghost cares for spirits of all the plants you have killed.',
        category: `skill`,
        price: '7 leaves',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(6, ghosts);

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