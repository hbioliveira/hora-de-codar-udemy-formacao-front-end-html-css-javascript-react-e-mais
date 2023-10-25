// 1 - Função setTimeout

console.log("Primeira execução - NORMAL");

setTimeout(function () {
    console.log("Segunda execução - ASSÍNCRONA");
}, 2000);

console.log("Terceira execução - NORMAL");

// 2 - setInterval
// console.log("Log 1");

// setInterval(function () {
//     console.log("Intervalo assíncrono");
// }, 3000);

// console.log("Log 2");

// 3 - Promise

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value -1)
    .then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");