const sum = require('../sum');
// import sum from '../sum';
describe('sum test case', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
}   )
describe('sum test case', () => {
    it('adds 1 + 3 to equal 4', () => {
        expect(sum(1, 3)).toBe(4);
    });
}   )

const multiply = require('../multiply')

describe('multiply test case', () => {
    it('multiply 1 * 2 to equal 2', () => {
        expect(multiply(1, 2)).toBe(2);
    });
}   )