export function renderLineItems(cartData, ghosts) {

    /*<tr class="cart-item">
        <td class="product">Plant Ghost</td>
        <td class="quantity">3</td>
        <td class="subtotal">3 offerings</td>
    </tr>*/

    const tr = document.createElement('tr');
    tr.classList.add('cart-item');

    const tdProduct = document.createElement('td');
    tdProduct.classList.add('product');
    tdProduct.textContent = ghosts.name;
    tr.append(tdProduct);

    const tdQuantity = document.createElement('td');
    tdQuantity.classList.add('quantity');
    tdQuantity.textContent = cartData.quantity;
    tr.append(tdQuantity);

    const tdSubtotal = document.createElement('td');
    tdSubtotal.classList.add('subtotal');
    tdSubtotal.textContent = `${cartData.quantity * ghosts.price} ${ghosts.priceCurrency}`;
    tr.append(tdSubtotal);

    return tr;
}