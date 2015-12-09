var isPrime = require('../lib/is-prime');

describe('is prime', function () {


	beforeEach(function () {
	});


	it('17 is prime', function () {
		var value = isPrime(17);
		expect(value).to.equal(true);
	});


	it('24 is not prime', function () {
		var value = isPrime(24);
		expect(value).to.equal(false);
	});


	it('15 is not prime', function () {
		var value = isPrime(15);
		expect(value).to.equal(false);
	});


});
