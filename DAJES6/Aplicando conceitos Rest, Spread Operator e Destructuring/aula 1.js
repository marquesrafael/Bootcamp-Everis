// Rest e Spread operator

// Antes da ES6
function sum(a, b) {
    var value = 0;

    for(var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(5,2,5,6,8));

// Depois da ES6
// rest operator é indicado pelos ...
// tras um array em vez de object
function sumEs6(...args) {
    return args.reduce((acc, value) => acc + value, 0);    
}
console.log(sumEs6(5,2,5,6,8));

// Com arrow functions
// define os dois primeiros, e deixa o resto no array
const sum2 = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(sum2(5,2,5,6,8));

// Spread operator
// Strings, arrays, literal objects e objetos iteraveis
// Spread em Strings
const str = 'Digital Innovation';
function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

// Spread em arrays
const arr = [1, 2, 3, 4];
function logArgs1(a, c, b) {
    console.log(a, b, c);
}
logArgs1(...arr);

// sem spread
const arr2 = [arr.concat([5, 6, 7])];
console.log(arr2);
// com spread
const arr3 = [...arr, 5, 6, 7];
console.log(arr3);

// so pode usar o spread para criar novos objetos. Não pode por exemplo para criar um novo array
