export function countPriceWithDiscount(num, discount) {
    return roundAfterPoint((num - (num * discount / 100)), 2)
}


function roundAfterPoint(num, decimal) {
    const factor = Math.pow(10, decimal)
    return Math.trunc(num * factor) / factor
}



export function createSlug(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_") // замінює все зайве на "_"
        .replace(/^_|_$/g, ""); // видаляє підкреслення на краях
}