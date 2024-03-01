const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log correct message with total 120', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWith('The total is: 120'));
  });

  it('should log correct message with total 20', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWith('The total is: 20'));
  });
});
