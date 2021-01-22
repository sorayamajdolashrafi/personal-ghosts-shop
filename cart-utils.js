import { findById } from './utils.js';

const CART = 'cartData'; // key
const emptyCart = [];

export function getCart() {
    const stringCart = localStorage.getItem(CART);
    
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
        
        return parsedCart;
    } else {
        const stringEmptyCart = JSON.stringify(emptyCart);

        localStorage.setItem(CART, stringEmptyCart);

        return emptyCart;
    }
}

export function clearCart() {
    const stringEmptyCart = JSON.stringify(emptyCart);

    localStorage.setItem(CART, stringEmptyCart);
}

export function saveCart(cartOrder) {
    const stringCart = JSON.stringify(cartOrder);

    localStorage.setItem(CART, stringCart);
}

export function addToCart(id) {
    
    const cart = getCart();
    const cartItem = findById(id, cart);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newCartItem = {
            id: id,
            quantity: 1,
        };

        cart.push(newCartItem);
    }

    saveCart(cart);
}