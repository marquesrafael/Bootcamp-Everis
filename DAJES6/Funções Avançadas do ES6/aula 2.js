// Gerar numero aleatório
function randomNumber() {
    return Math.random() * 10;
}

// ES6 define padrão direto
function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));