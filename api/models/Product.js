/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  	  type: 'integer',
  	  primaryKey: true,
  	  autoIncrement: true
  	},
    name: {
      type: 'string',
      size: 200
    },
    price: {
      type: 'float'
    },
    quantity: {
      type: 'integer'
    },
    updated_at: {
      type: 'datetime'
    },
    created_at: {
      type: 'datetime'
    },        
    category_id: {
      type: 'integer'
    }    
  }
};

