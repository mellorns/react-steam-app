export function countPriceWithDiscount(num, discount) {
    return roundAfterPoint((num - (num * discount / 100)), 2)
}


function roundAfterPoint(num, decimal) {
    const factor = Math.pow(10, decimal)
    return Math.trunc(num * factor) / factor
}



export function createSlug(str) {
    return str ? str.replaceAll(' ', '_') : ''
}