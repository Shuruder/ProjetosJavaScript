// Set

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet =new Set(arr);

    /*return mySet;*/ // Isso é um set, sim mas no caso para retornar um outro array com os valores do set

    return [...mySet]; // fazemos então um spread com isso criando um novo array 
}

function retornaArray(arr) {
    return meuArray;
}

console.log(valoresUnicos(meuArray));
console.log(retornaArray());