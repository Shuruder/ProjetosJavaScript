Aula Javascript

COnteudos aula 1: Map e Set

Estrutura

const myMap = new Map()

//caracteristicas: Uma coleção de arrays no formato chave, valor
// Pode ser iterado por um loop for...of

//Metodos
// adicionar, ler e deletar


const myMap = new Map()

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// retorna fruit

myMap.delete("apple")
// true

myMap.get("apple")
// retorna undefined porque deletamos apple e seus valores

//Map vs Objeto

// - Maps podem ter chaves de qualquer tipo;
// - Maps possuem a propriedade lenght;
// - Maps são mais fáceis de iterar;
// - Utilizado quando o valor das chaves é desconhecido;
// - Os valores tem o mesmo tipo.

Conteudo Set 

Estrutura

// Sets são estruturas que armazeam apenas valores unicos (não se repetem nunca)

Set(8) {1, 2, 3, 4, 5, ...}
//out
// 0: 1
// 1: 2
// 2: 3
// ....


//Metodos

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);

// Sets vs Arrays

// - Possui valores únicos;
// - Em vez da prop length, consulta-se o numero de registros pelo size
// - Não possui os metodos map, filter, reduce etc (Operações mais limitadas)