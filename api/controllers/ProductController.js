/**
 * ProductControllerController
 *
 * @description :: Server-side logic for managing Productcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ProductControllerController.saveProduct()`
   */
  saveProduct: function (req, res) {
  	var productData = {
      name: req.param('name'),
      price: req.param('price'),
      quantity: req.param('quantity'),      
      category_id:  req.param('categoryId') 
	};
	Product.create(productData).exec(function (err, product){
	  if (err) { 
	  	return res.serverError(err); 
	  }
	  sails.log('Product id is:', product.id);
	  return res.send(200, { message: 'Product added successfully.' });
	});  	
  },

  /**
   * `ProductControllerController.updateProduct()`
   */  
  updateProduct: function(req, res) {
    var productData = {
      name: req.param('name'),
      price: req.param('price'),
      quantity: req.param('quantity'),      
      category_id:  req.param('categoryId') 
    };
	Product.update({id: req.param('productId')}, productData).exec(function (err, updated){
	  if (err) { 
	  	return res.serverError(err); 
	  }
	  sails.log('Product id is:', updated);
	  return res.send(200, { message: 'Product updated successfully.' });
	});      
  }
};

