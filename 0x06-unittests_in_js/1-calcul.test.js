const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should correctly perform SUM operation', () => {
    assert.strictEqual(calculateNumber('SUM', 4.5, 2), 7);
  });

  it('should correctly perform SUBTRACT operation', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 3.5), 6);
  });

  it('should correctly perform DIVIDE operation', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should return "Error" for DIVIDE operation when b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
  });

  it('should throw an error for invalid operation type', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 5, 2), /^Error: Invalid operation type$/);
  });

  it('should throw an error if parameters are not numbers', () => {
    assert.throws(() => calculateNumber('SUM', 'abc', 2), /^Error: Parameters must be numbers$/);
  });
});
