const { sluggerify } = require('./index')

/**
 * @describe contains basic sluggerish functionality tests.
 */
describe('testing sluggerish basic functionality', () => {
    /**
     * @it verifies sluggerish supports spaces
     */
    it('slugger supports spaces', () => {
        const result = sluggerify('this is one line')
        const expected = 'this-is-one-line';
        expect(result).toEqual(expected);
    })
    /**
     * @it verifies sluggerish supports spaces in multiple words
     */
    it('slugger supports spaces', () => {
        const result = sluggerify('this is one line', 'my name is ohad')
        const expected = 'this-is-one-line-my-name-is-ohad';
        expect(result).toEqual(expected);
    })
})