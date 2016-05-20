define([
  'underscore',
  'backbone',
], function(_, Backbone) {

	var ProductModel = Backbone.Model.extend({
		//Validate Model
		validate : function(attrs){

			//Product must have a name
 			if ( !attrs.name ) return "Name is required";

 		}
  });

  return ProductModel;
});
