// 1 - Strict
// "use strict";

// // variável declarada com tipo
// const opa = "teste";
// console.log(opa);

// // variável declarada sem tipo
// opa = "teste";
// console.log(opa);

// 2 - Depurando com console.log

// 3 - Método debug - debugger

// let c = 1;
// let d = 2;

// if(c == 1) {
//     c = d + 2;
// }

// debugger;

// for (let i = 0; i < d; i++) {
//     c = c + 2;
// }

// console.log("executou o loop");

// debugger;

// if (c > 5) {
//     c = 25;
// }
 
// 4 - Tratamento de Erro ou Dados por função

// function checkNumber(n) {
//     const result = Number(n);

//     if (Number.isNaN(result)) {
//         console.log("Valor incorreto, tente novamente");
//         return;
//     }

//     console.log("Valor correto!");
//     return result;
// }

// checkNumber(5)
// checkNumber("23")
// checkNumber({})
// checkNumber("not a number")