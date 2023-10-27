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
// function checkNumber(n) {
//     const result = Number(n);

//     if (Number.isNaN(result)) {
//         console.log("Valor incorreto, tente novamente");
//         return;
//     }
//     if (Number.isNaN(result)) {
//         console.log("Valor incorreto, tente novamente");
//         return;
//     }

//     console.log("Valor correto!");
//     return result;
// }
//     console.log("Valor correto!");
//     return result;
// }

// checkNumber(5)
// checkNumber("23")
// checkNumber({})
// checkNumber("not a number")

// 5 - Exceptions

// const x = 10;

// if (x != 11) {
//     throw new Error("O valor de x não pode ser diferente de 11");
// }

// 6 - Try Catch

// try {
//     const soma = x + y
// } catch(error) {
//     console.log(`Erro no programa: ${error}`);
// }

// 7 - Finally

// try {
//     const value = checkNumber("afasf");

//     if(!value) { 
//         throw new Error("Valores inválidos")
//     }
// } catch(error) {
//     console.log(`Opa, aconteceu um erro: ${error}`);
// } finally {
//     console.log("Mesmo tendo acontecido um problema, o código foi executado através do FINALLY");
// }

// 8 - Assertions
function checkArray(arr) {

    if(arr.length === 0){
        throw new Error("O array precisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos.`);
    }
}

checkArray([1, 2, 3]);