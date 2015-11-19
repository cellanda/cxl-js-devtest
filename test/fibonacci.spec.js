var fibonacci = require('../lib/fibonacci');

describe('fibonacci', function () {


	beforeEach(function () {
	});


	it('generates the first value', function () {
		var value = fibonacci(1);
		expect(value).to.equal(1);
	});


	it('generates the 6th value', function () {
		var value = fibonacci(6);
		expect(value).to.equal(8);
	});


});
