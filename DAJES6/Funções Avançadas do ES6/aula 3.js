var prop1 = "Digital";
function method1() {
    console.log('method called');
}
var obj = {
    method1
}

var obj = {
    sum(a, b){
        return a + b;
    }
}
console.log(obj);

/////////////////////////

var propName = 'test';
var obj2 = {
    [propName + 'concat']: 'prop value'
};
console.log(obj2);