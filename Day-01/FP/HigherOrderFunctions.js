function filter(list, criteriaFn){
    var result = [];
    for(var i=0; i<list.length; i++)
       if (criteriaFn(list[i]))
          result.push(list[i]);
    return result;
}

var costlyProductCriteria = function(p){
    return p.cost > 50;
}

var costlyProducts = filter(products, costlyProductCriteria);

function negate(fn){
    return function){
        return !fn.apply(this,arguments);
    }
}
var affordableProductCriteria = function(p){
    return p.cost <= 50;
}

function negate(fn){
    return function(){
        return !fn.apply(this,arguments);
    }
}

var affordableProductCriteria = negate(costlyProductCriteria)
var affordableProducts = filter(products, affordableProductCriteria);


function getCostlyCriteria(baseCost){
    var criteriaFn = function(p){
        return p.cost > baseCost;
    };
    criteriaFn.not = function(){
        return function(){
            return !criteriaFn.apply(this, arguments);
        }
    }
    return criteriaFn;
}