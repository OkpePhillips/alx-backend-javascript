const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
        assert.strictEqual(calculateNumber(0.4, 0.6), 1);
        assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
        assert.strictEqual(calculateNumber(-0.4, -0.6), -1);
    });
});
