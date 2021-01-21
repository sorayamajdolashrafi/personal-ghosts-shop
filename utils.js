export function findById(id, array) {

    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}