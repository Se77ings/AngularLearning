"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minhaVar = 'minha variável';
function minhaFuncao(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 2015 (arrow function)
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'saddsa';
n1 = 4;
