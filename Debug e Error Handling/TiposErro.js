// Apresentando o Error do ECMAScript e DOMException

// ECMAScript Error

// Erro em tempo de execução

// - Mensagem (variavel não declarada, ponto e virgula etc)
// - Nome
// - Linha
// - Call Stack


// DOMException - Exceção do DOM
// Envolvido no contexto da página web

// Erros relacionados ao Document Object Model
// Ex: Caracter invalido, nó não pode ser inserido no local, etc

// Erros estruturais apenas.


//----------------------------------------

// Explicação throw e return

// apresentação da declaração try/catch


// Throw exemplos



function verificaPalindromo(string) {
    if (!string) return "String inválida"; // com return ele só vai retornar a string inválida

    return string === string.split('').reverse().join('');
}

function verificaPalindromo2(string) {
    if (!string) throw "String inválida"; // com throw ele retorna um erro realmente

    return string === string.split('').reverse().join('');
}

//console.log(verificaPalindromo('ava'));

//console.log(verificaPalindromo2(''));



//--------


// try...catch

function verificaPalindromo3(string) {
    if (!string) throw "String inválida"; // com throw ele retorna um erro realmente

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo3(string)
    }
    catch(e) {
        console.log(e)
    }
}

//tryCatchExemplo('');

//--------

//Finally
// Complemento do try catch
// É uma instrução que vai ser chamada independente de erro ou não


function verificaPalindromo4(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo2(string) {
    try {
        return verificaPalindromo4(string)
    }
    catch(e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

//tryCatchExemplo2('ala');

// -------------------------

//O Objeto Error - Criando erros

// Como manipular o objeto Error
//
//

// Códgo

new Error(message, fileName, lineNumber)

// todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

// Parametros do Error .name .stack
// .name - Nome do tipo de Erro
// .stack - apresenta todo o Stack do Erro, name parametros e local (linha:coluna)