function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }
  switch (type.toUpperCase()) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      const roundedB = Math.round(b);
      if (roundedB === 0) {
        return 'Error';
      }
      return Math.round(a) / roundedB;
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
