const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('Return correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Return correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });
  it('Return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Return correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Return correct status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }); 
});

describe('Login endpoint', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('should return the message Welcome :username', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'John' }
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome John');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  let server;

  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('should return an object with payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
