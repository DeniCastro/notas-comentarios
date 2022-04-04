// Clonar objetos utilizando "assign" 

const celular = {
    marcaCelular: 'XIAOMI',
    memoria: 128,
    cor: 'Branco',
    tamanhoTela: 6.5,
    
    // Criação de função é opcional aqui.
    ligar: function () {
        console.log('Fazendo Ligação... ');
    }
}
console.log(celular);

// Cria o novo objeto, note que o assign adicionou um novo membro
const novoCelular = Object.assign({
    bateria: 5000
}, celular);

// Para alterar um valor, chamamos o objeto e mudamos.
novoCelular.marcaCelular = 'Samsung'
console.log(novoCelular);

// Agora, uma alternativa pro uso de "assign", utilizando SPREAD
const terceiroCelular = {...celular};
terceiroCelular.marcaCelular = 'LG'
terceiroCelular.cor = 'Preto'
console.log(terceiroCelular);
