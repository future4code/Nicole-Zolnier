export const lonelyNumber = (arr: number[]) => {
    let unique = arr.reduce((a, b) => a ^ b, 0)
    return unique
}
