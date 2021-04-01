type Matrix = number[][]

export const countNegatives = (m: Matrix): number => {
    let negatives: number[] = []
    for (const row of m) {
        for (const element of row) {
            if (element < 0) {
                negatives.push(element)
            }
        }
    }
    return negatives.length
}

export const countNegativesOptmized = (m: Matrix): number => {
    const [row, column] = [m.length, m[0].length]
    let negativeCount = 0
    let i = row - 1
    let j = 0
    while (j < column && i >= 0) {
        if (m[i][j] < 0) {
            negativeCount += column - j
            i--
        } else {
            j++
        }
    }
    return negativeCount
}