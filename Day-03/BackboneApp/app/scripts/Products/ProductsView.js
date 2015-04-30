window.ProductsView = Backbone.View.extend({
    templateId : "#productsTemplate",
    initialize : function(){
        this.templateFn = null;
        this.listenTo(this.collection, "add", this.render);
        //this.collection.fetch();
    },
    render : function(){
        
        this.$el.html($(this.templateId).html());
        this.collection.each(function(product){
            
            var productView = new ProductView({model : product});
            productView.render();
            this.$("table").append(productView.$el);
        });
        return this;
    }
});

window.ProductView = Backbone.View.extend({
    templateId : "#productTemplate",
    initialize : function(){
        console.log("model = ", this.model.attributes);
        this.templateFn = null;
        this.listenTo(this.model, "change", this.render);
    },
    render : function(){
        if (!this.templateFn){
            this.templateFn = Handlebars.compile($(this.templateId).html());
        }
        this.$el.html(this.templateFn(this.model.attributes));
        return this;
    }
});