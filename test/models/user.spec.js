var UserModel = require('../../api/models/User');	
var sinon = require('sinon');	
var assert = require('assert');	
var should = require('should');

describe('User Model', function() {
	describe('when we invoke the index action', function() {
		it('should check', function() {
			assert(1, 1);
		});
	});	
	describe('checking if value is truth', function() {
		it('should check 1', function() {
			assert.ok(1);
		});
		it('should check true', function() {
			assert.ok(1);
		});		
		it('checking strict equall', function(){
			assert.strictEqual(true, true);
		});
	});	
	describe('Array', function() {
	  describe('#indexOf()', function() {
	    it('should return -1 when the value is not present', function() {
	      [1,2,3].indexOf(5).should.equal(-1);
	      [1,2,3].indexOf(0).should.equal(-1);
	    });
	  });
	});		
});

	describe('hooks', function() {

	  before(function() {
	    console.log('runs before all tests in this block');
	  });

	  after(function() {
	    console.log('runs after all tests in this block');
	  });

	  beforeEach(function() {
	    console.log('runs before each test in this block');
	  });

	  afterEach(function() {
	    console.log('runs after each test in this block');
	  });

	  describe('firstTest()', function() {
	    it('should return -1 when the value is not present', function() {
	      [1,2,3].indexOf(5).should.equal(-1);
	      [1,2,3].indexOf(0).should.equal(-1);
	    });
	  });
	  describe('secondTest()', function() {
	    it('should return -1 when the value is not present', function() {
	      [1,2,3].indexOf(5).should.equal(-1);
	      [1,2,3].indexOf(0).should.equal(-1);
	    });
	  });	  
	});	