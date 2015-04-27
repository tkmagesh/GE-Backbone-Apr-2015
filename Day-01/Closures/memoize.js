function getPrimeFinder(){
    var cache = {};

    function checkPrime(n){
        console.log("processing algo for ", n);
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }

    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = checkPrime(n);
        return cache[n];
    }
}

function memoize(fn){
    var cache = {};

    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = fn(n);
        return cache[n];
    }
}

function memoize(fn){
    var cache = {};

    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}




