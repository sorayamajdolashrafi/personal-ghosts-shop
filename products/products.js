import { ghosts } from './ghosts.js';
import { renderGhost } from './renderGhost.js';

const listingsBox = document.getElementById('listings');

for (let ghost of ghosts) {
    const ghostElement = renderGhost(ghost);

    listingsBox.append(ghostElement);
}