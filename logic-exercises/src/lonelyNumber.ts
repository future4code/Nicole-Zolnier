export const lonelyNumber = (arr: number[]) => {
    let unique = arr.filter(function (value: any) {
        return arr.indexOf(value) === arr.lastIndexOf(value)
    })

    return unique[0]
}
