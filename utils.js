export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {

    const lineTotal = quantity * price;

    return lineTotal;
}

export function calcOrderTotal(cartData, ghosts) {

    let total = 0;

    for (let item of cartData) {
        const ghost = findById(item.id, ghosts);
        const subtotal = calcLineItem(item.quantity, ghost.price);

        total = total + subtotal;
    }

    return `total: ${total} pieces for the offering`;
}

//