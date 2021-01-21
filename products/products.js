import { ghosts } from './ghosts.js';
import { renderGhost } from './renderGhost.js';

const listingsBox = document.getElementById('listings');
const cartButton = document.getElementById('link-to-cart');

for (let ghost of ghosts) {
    const ghostElement = renderGhost(ghost);

    listingsBox.append(ghostElement);
}

cartButton.addEventListener('click', () => {

    window.location.href = '../cart/';
    
});