import { cartData } from './cart-data.js';
import { renderLineItems } from './render-line-items.js';
import { findById } from '../utils.js';
import { ghosts } from '../products/ghosts.js';

const buttonBackToProducts = document.getElementById('link-to-products');
const checkoutTable = document.getElementById('checkoutTable');
//const buttonPlaceOrder = document.getElementById('placeOrder');

for (let item of cartData) {
    
    const ghost = findById(item.id, ghosts);

    const productRow = renderLineItems(item, ghost);

    checkoutTable.append(productRow);

}

// Link back to product page
buttonBackToProducts.addEventListener('click', () => {

    window.location.href = '../products/';
    
});

