// Arrow functions são sempre funções anonimas
// Arrow functions não tem função construtora

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
};

obj.showContext();

// Podemos omitir os parênteses de uma arrow function
// Quando existir apenas um argumento e nada mais.

// lazy evaluation: característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.
