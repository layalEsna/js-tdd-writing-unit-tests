// Your tests here
import { pointsForWord } from '../utils'

describe('pointsForWord', () => {
    it('calculates the total points for a word(1 point for vowel, 2 per consonent)',
        () => {
            const word = 'test'
            const points = pointsForWord(word)
            expect(points).toBe(7)
        
    })
})
