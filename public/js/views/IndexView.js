define(["jquery","handlebars","backbone","views/ProductView"],function(e,n,t,i){var l=t.View.extend({el:e("#app"),events:{"click #load-button":"btnClickHandler"},initialize:function(){this.listenTo(this.collection,"add",this.addItemHandler),this.collection.loadPage()},addItemHandler:function(e){var n=new i({model:e});this.$("#products-list").append(n.$el)},btnClickHandler:function(){this.collection.loadPage()}});return l});