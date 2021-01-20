export function renderGhost(ghost) {
    /*  
        id: 1,
        name: 'Skater Ghost',
        img: 'skater-ghost.png',
        description: 'Do you want to go fast? This rad boy can take you for a ride.',
        category: `skill`,
        price: '4 skateboard wheels',

    */
    const li = document.createElement('li');
    li.classList.add('ghost-item');

    const h3 = document.createElement('h3');
    h3.classList.add('ghost-name');
    h3.textContent = ghost.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('ghost-image');
    li.append(img);
    img.src = `../assets/${ghost.img}`;
    img.alt = ghost.name;

    const pDescription = document.createElement('p');
    pDescription.classList.add('ghost-description');
    pDescription.textContent = ghost.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.classList.add('ghost-category');
    pCategory.textContent = `category: ${ghost.category}`;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('ghost-price');
    pPrice.textContent = `offering: ${ghost.price}`;
    li.append(pPrice);

    const button = document.createElement('button');
    button.textContent = `add to cart`;
    button.value = ghost.id;
    li.append(button);

    return li;
}