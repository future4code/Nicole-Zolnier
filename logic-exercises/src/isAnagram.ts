export const isAnagram = (a: string, b: string) => {
    if (a.length !== b.length) return false
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')
}
