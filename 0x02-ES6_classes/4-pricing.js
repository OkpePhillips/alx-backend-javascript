import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'amount');
    this._currency = this.validateCurrency(currency, 'currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

validateNumber(value, attributeName) {
  if (typeof value !== 'number') {
    throw new TypeError(`${attributeName} must be a number`);
  }
  return value;
}

validateCurrency(value, attributeName) {
  if (!(value instanceof Currency)) {
    throw new TypeError(`${attributeName} must be an instance of Currency`);
  }
  return value;
}
