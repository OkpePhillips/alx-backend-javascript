const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    calculateNumberSpy.restore();
  });

  it('should display the correct total in the console', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');
  });
});
