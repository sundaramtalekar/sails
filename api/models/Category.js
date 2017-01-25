/**
 * Category.js
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
    updated_at: {
      type: 'datetime'
    },
    created_at: {
      type: 'datetime'
    }
  }
};

