// Require.js Configurations
// -------------------------
require.config({
  baseUrl: "./js/",

  paths: {

      // Core Libraries
      // --------------
      jquery: "lib/jquery",
      underscore: "lib/underscore",
      backbone: "lib/backbone",
      handlebars: "lib/handlebars",

      // Plugins
      // -------
      text: "lib/text"

  },

  shim: {
	  underscore: {
       exports: '_'
     },

     backbone: {
       deps: [ 'underscore', 'jquery' ],
       exports: 'Backbone'
     }
  }
});

// Start the app. Load the Index View and Pass Product Collection
// -------------------------
require([ 'views/IndexView', 'collections/ProductCollection' ], function(IndexView, ProductCollection){

	//Loading the Index View with Product Collection
  	var indexview = new IndexView({
    	collection: ProductCollection
  	});

});
