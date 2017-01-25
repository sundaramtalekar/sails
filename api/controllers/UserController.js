/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  test: function(req, res) {
  	console.log(req.route);
  	res.status(404);
  	res.send('oops');
  	//return res.notFound();
  	//return res.redirect('http://google.com');
  	//return res.forbidden('Write access required');
  	//res.view();
  	//return res.ok(['hello', 'buddy', 'how', 'are', 'you']);
  }
};

