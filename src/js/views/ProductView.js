define([
  'jquery',
  'handlebars',
  'backbone',
  'text!templates/ProductTemplate.html'
  ], function($, Handlebars, Backbone, ProductTemplate){
  var ProductView = Backbone.View.extend({

	  // On Init Handler
	  initialize: function() {

		  //Update if Changed
		  this.listenTo(this.model, 'change', this.render);

		  // Render on Load
		  this.render();
		  
	  },

	  render: function() {

		  //Load Product Template
		  var template = Handlebars.compile(ProductTemplate);

		  //Set View to Template loaded with model
		  this.setElement(template(this.model.toJSON()));

		  //return for chaining
		  return this;
	  },


  });

  return ProductView;
});
