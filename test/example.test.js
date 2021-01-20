// IMPORT MODULES under test here:
import { renderGhost } from '../products/renderGhost.js';

const test = QUnit.test;

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

    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="ghost-item"><h3 class="ghost-name">Skater Ghost</h3><img class="ghost-image" src="../assets/skater-ghost.png" alt="Skater Ghost"><p class="ghost-description">Do you want to go fast? This rad boy can take you for a ride.</p><p class="ghost-category">category: skill</p><p class="ghost-price">offering: 4 skateboard wheels</p><button value="1">add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGhost(skaterGhost);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
