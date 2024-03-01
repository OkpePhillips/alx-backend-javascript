const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should correctly perform SUM operation', () => {
    expect(calculateNumber('SUM', 4.5, 2)).to.equal(7);
  });

  it('should correctly perform SUBTRACT operation', () => {
    expect(calculateNumber('SUBTRACT', 10, 3.5)).to.equal(6);
  });

  it('should correctly perform DIVIDE operation', () => {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
  });

  it('should return "Error" for DIVIDE operation when b is 0', () => {
    expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', () => {
    expect(() => calculateNumber('MULTIPLY', 5, 2)).to.throw('Invalid operation type');
  });

  it('should throw an error if parameters are not numbers', () => {
    expect(() => calculateNumber('SUM', 'abc', 2)).to.throw('Parameters must be numbers');
  });
});
