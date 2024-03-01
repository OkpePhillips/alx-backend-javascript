const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('API Tests', () => {
  describe('GET /', () => {
    it('returns correct status code', (done) => {
      request.get('http://localhost:7865', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns correct result', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('GET /cart/:id', () => {
    it('returns correct status code when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('returns correct result when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('returns correct status code when :id is NOT a number', (done) => {
      request.get('http://localhost:7865/cart/abc', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /available_payments', () => {
    it('returns correct status code and structure', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.deep.equal(JSON.stringify({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }));
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns correct status code and message', (done) => {
      const userName = 'testUser';
      const requestData = { userName };
      request.post({
        url: 'http://localhost:7865/login',
        json: requestData
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      });
    });
  });
});
