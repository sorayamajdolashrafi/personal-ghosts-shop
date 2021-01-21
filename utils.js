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