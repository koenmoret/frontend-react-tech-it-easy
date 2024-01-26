export function calculateSoldProducts(inventory) {
    let total = 0;

    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].sold;
    }
    console.log(total);
    return total;
}

