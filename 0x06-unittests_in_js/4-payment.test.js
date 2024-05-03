const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
  });

  it('should log correct message with the stubbed result', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
  });
});
