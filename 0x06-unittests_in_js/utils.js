const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return a + b;
    } else {
      throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
