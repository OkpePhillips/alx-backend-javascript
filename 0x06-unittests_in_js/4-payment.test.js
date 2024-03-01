const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    consoleLogSpy.restore();
    calculateNumberStub.restore();
  });

  it('should log correct message with total 10', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWith('The total is: 10'));
  });

  it('should call calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledOnceWith('SUM', 100, 20));
  });
});

