define([
	'jquery',
	'handlebars',
	'backbone',
	'views/ProductView'
], function($, Handlebars, Backbone, ProductView){

	var IndexView = Backbone.View.extend({
		// #app is the parent container
		el: $("#app"),

		// The DOM events
		events: {
			// Watch for click on Button
      	"click #load-button": "btnClickHandler"
    	},

		// On Init Handler
		initialize: function(){
			// Watch for Items to be added to collection
			this.listenTo(this.collection, 'add', this.addItemHandler);

			// Load the first page of products
			this.collection.loadPage();
		},

		// Collection Item added handler
		addItemHandler: function(product){

			//Create a new Product View
			var productview = new ProductView({model: product});

			//Add to DOM - in list
			this.$("#products-list").append(productview.$el);
		},

		// Button Click Handler
		btnClickHandler: function(){

			// Add a page to the collection
			this.collection.loadPage();

		}
	});

	return IndexView;

});
