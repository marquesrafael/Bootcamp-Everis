// Generators
// são funções com pausa e retorna atraves da interface

function hello() {
    console.log('Hello');
    /// para pausar
    yield 1;
    console.log('From');
    yield 2;
    console.log('Function');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
////////////////////////////

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


