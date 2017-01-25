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
  	console.log(req.accepted);
  	return res.send('Hi there!');
  }
};

