import { findById } from './utils.js';

const cartKey = 'cartData'; // key
const emptyCart = [];

export function getCart() {
    const stringCart = localStorage.getItem(cartKey);
    
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
        
        return parsedCart;
    } else {
        const stringEmptyCart = JSON.stringify(emptyCart);

        localStorage.setItem(cartKey, stringEmptyCart);

        return emptyCart;
    }
}

export function clearCart() {
    const stringEmptyCart = JSON.stringify(emptyCart);

    localStorage.setItem(cartKey, stringEmptyCart);
}

export function saveCart(cartOrder) {
    const stringCart = JSON.stringify(cartOrder);

    localStorage.setItem(cartKey, stringCart);
}

export function addToCart(id, option) {
    
    const cart = getCart();
    const cartItem = findById(id, cart);
    const addQuantity = option;
    
    if (cartItem) {
        cartItem.quantity += addQuantity;
    } 
    else {
        const newCartItem = {
            id: id,
            quantity: addQuantity,
        };

        cart.push(newCartItem);
    }

    saveCart(cart);
}