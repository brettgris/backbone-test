define([
	'underscore',
  	'backbone',
  	'models/ProductModel'
], function(_, Backbone, ProductModel) {

	var ProductCollection = Backbone.Collection.extend({
		//Collection of Products
		model: ProductModel,

		//Product API call
		// handles paging with ?page=
		url: "http://localhost:6060/products",

		// On Init Handler
		initialize: function(){

			//Holds the next page
			//Starts at 1
			this.page = 1;
		},

		// Method to load next page to Collection
		loadPage: function(){

			// API Get Method
			// add to collection - instead of replace
			// use pages url parameter in call
			this.fetch( { add:true, data: { page: this.page } } );

			//Inscrease next page for next call
			this.page++;
		}

	});

  	return new ProductCollection();
});
