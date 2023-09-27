// 9 - Classes ES6

// class CachorroClasse {
//     constructor(nome, raca) {

//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")

// console.log(jeff);

// 10 = Mais sobre classes

// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, 'Vermelha');

// console.log(scania);

// scania.descreverCaminhao();

// 11 - Override on Prototype

// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome
//         this. idade = idade
//     }
// }

// const gabriela = new Humano("Gabriela", 35);

// console.log(gabriela);

// // Para fazer o override no prototype

// Humano.prototype.idade = "Não definida como padrão";

// console.log(gabriela.idade);

// console.log(Humano.prototype.idade);

// PRATICANDO

// class Gato {
//     constructor(nome, idade, cor) {
//         this.nome = nome
//         this.idade = idade
//         this.cor = cor
//     }
// }

// const Leona = new Gato("Leona", 6, "Tricolor");
// const Clotilde = new Gato ("Clotilde", 6, "Preta e Branca")

// console.log(Leona);
// console.log(Clotilde);

// 12 - Symbols em Classes

// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;

// const boeing = new Aviao("Boeing", 10);

// console.log(boeing);

// console.log(boeing[asas]);

// console.log(boeing[pilotos]);

// 13 - Get e Set

// class Post {
//     constructor(titulo, descricao, tags) {
//         this.titulo = titulo
//         this.descricao = descricao
//         this.tags = tags        
//     }

//     get exibirTitulo() {
//         return `Você está lendo: ${ this.titulo}`;
//     }

//     set adicionarTags(tags) {
//         const tagsArray = tags.split(", ")
//         this.tags = tagsArray
//     }
// }

// const myPost = new Post("Algum post", "É um post sobre programação");

// console.log(myPost);

// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = "programação, javascript, JS";

// console.log(myPost);

// 14 - Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero { 
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const mau = new Lobo(4, "Mau");

console.log(mau);

console.log(mau.patas);

// 15 - Operador instanceof

console.log(mau instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(mau instanceof Mamifero);



