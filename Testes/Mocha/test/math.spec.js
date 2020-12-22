const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function() {
    // hooks - forma de evitar repetição
    beforeEach(function() {
        let value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        value = 5;
        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    // .only -> executar apenas um teste, apesar de terem mais testes
    it.only('Multiply two numbers', function () {
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });

    // .skip -> pular esse teste
    it.skip('Multiply two numbers', function () {
        const math = new Math();
    
        assert.equal(math.multiply(5, 5), 25);
    });

    
});