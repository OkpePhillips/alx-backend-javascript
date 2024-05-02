const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle one rounded number and one non-rounded number', () => {
    assert.strictEqual(calculateNumber(1.4, 2), 3);
  });
});
