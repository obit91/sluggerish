const { sluggerify } = require('./index')

/**
 * @describe contains basic Sluggerify functionality tests.
 */
describe('testing Sluggerify basic functionality', () => {
    /**
     * @it verifies Sluggerify supports spaces
     */
    it('slugger supports spaces', () => {
        const result = sluggerify('this is one line')
        const expected = 'this-is-one-line';
        expect(result).toEqual(expected);
    })
    /**
     * @it verifies Sluggerify supports spaces in multiple words
     */
    it('slugger supports spaces across multiple lines', () => {
        const result = sluggerify('this is one line', 'my name is ohad')
        const expected = 'this-is-one-line-my-name-is-ohad';
        expect(result).toEqual(expected);
    })
})