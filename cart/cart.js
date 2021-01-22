import { renderLineItems } from './render-line-items.js';
import { findById, calcOrderTotal } from '../utils.js';
import { ghosts } from '../products/ghosts.js';
import { getCart, clearCart } from '../cart-utils.js';

const buttonBackToProducts = document.getElementById('link-to-products');
const checkoutTable = document.getElementById('checkoutTable');
const orderTotal = document.getElementById('total');
const buttonPlaceOrder = document.getElementById('placeOrder');
const thanksMessage = document.getElementById('thanksForPurchaseContainer');

const cartData = getCart();

for (let item of cartData) {
    
    const ghost = findById(Number(item.id), ghosts);
    const productRow = renderLineItems(item, ghost);
    
    checkoutTable.append(productRow);

}

if (cartData > [0]) {
    orderTotal.append(calcOrderTotal(cartData, ghosts));
    buttonPlaceOrder.hidden = false;
}

// PlaceOrder button actions to humor lab excersice
buttonPlaceOrder.addEventListener('click', () => {

    //display alert
    alert(JSON.stringify(cartData, true, 2));
    //remove cart from local storage
    clearCart();
    //redirect user back to home page
    checkoutTable.style.display = 'none';

    const p = document.createElement('p');
    p.textContent = 'Thank you for your order, your ghosts will be with you shortly. Please have your offering waiting for them.';

    thanksMessage.append(p);
    
});

// Link back to product page
buttonBackToProducts.addEventListener('click', () => {

    window.location.href = '../products/';
    
});
