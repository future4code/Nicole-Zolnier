export const indexOf = (source: string | string[], query: string) => {
    for (let i = 0; i < source.length; i++) {
        if (source[i] === query) {
            return i
        }
    }
    // item was not found
    return -1
}
