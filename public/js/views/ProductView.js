define(["jquery","handlebars","backbone","text!templates/ProductTemplate.html"],function(e,t,n,i){var r=n.View.extend({initialize:function(){this.listenTo(this.model,"change",this.render),this.render()},render:function(){var e=t.compile(i);return this.setElement(e(this.model.toJSON())),this}});return r});