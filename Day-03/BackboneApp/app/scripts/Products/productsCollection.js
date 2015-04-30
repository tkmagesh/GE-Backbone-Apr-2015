window.ProductsCollection = Backbone.Collection.extend({
    model : Product,
    totalCost : function(){
        return this.map(function(p){
            return p.units * p.cost;
        }).sum();
    },
    url : "http://localhost:3000/products"
});