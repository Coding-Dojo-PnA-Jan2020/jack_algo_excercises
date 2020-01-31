function siggma(number){
    if(number === 1){
        return 1
    }
    return number + siggma(number-1);
}

var result = sigma(5);
console.log(result);

var factorial = function(x){
    if(x==0){
        return 1
    } else {
        return x * factorial(x-1);
    }
}

console.log(factorial(num));
var num = factorial