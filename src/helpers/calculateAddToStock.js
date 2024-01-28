export function calculateAddToStock(inventory) {
    let total = 0;

    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].originalStock;
    }
    console.log(total);
    return total;
}
