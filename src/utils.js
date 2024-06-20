// Your code here
export function pointsForWord(word) {
    let result = 0
    for (let letter of word) {
        if (letter.includes('a') || letter.includes('e') || letter.includes('u') || letter.includes('o') || letter.includes('i')) {
            result += 1
        } else {
            result +=2
        }
    }
    return result
}
