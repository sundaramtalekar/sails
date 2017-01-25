var productController = require('../../api/controllers/ProductController');	
var supertest = require('supertest');	

describe('Checking product controller', function() {
	it('Adding new product', function(done) {	
      supertest(sails.hooks.http.app)
        .post('/product')
        .send({ name: 'Testing product', price: 45.50, quantity: 21, category_id: 1 })
        .expect(200, done)
	});		
});
