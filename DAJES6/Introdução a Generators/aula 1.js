// Symbols e Iterators
// Antes eram 6 symbols
// symbols são maneiras de gerar idenficadores unicos

const uniqueId = Symbol('Hello');
const obj = {
    [uniqueId]: 'Hello',
}
console.log(uniqueId);

// Well known symbols
Symbol.iterador
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
const str = 'Digital Innovation One';

while(true) {
    let {value, done} = it.next();

    if (done){
        break;
    }
}

for (let value of str) {
    console.log(value);
}



