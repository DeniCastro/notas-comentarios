// Utilizando funções:
const Livro = function(nome, editora, paginas){
    nome,
    editora,
    paginas

    this.getNome = function(){
        return nome
    }
    this.getEditora = function () {
        return editora
    }
    this.getPaginas = function (){
        return paginas
    }
}

const GraphQL = new Livro ("GraphQL", "Casa do Livro", 250)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//                                          =        CRIANDO CLASSES        =

// Ao Criar a classe, não precisamos por nada dentro de parênteses, apenas abrimos chaves e chamamos o método construtor:
class Carro{
    constructor(modelo, marca, ano){
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
    }
    
// Se precisarmos, podemos criar métodos, que serão chamados diretamente com o item da classe a ser criado:
    anunciarCarro(){
        console.log("COMPREM ESSE MODELO, É MUITO BOM!")
    }
    descreverModelo(){
        console.log(`O ${this.modelo} ${this.ano} é muito benefício e pouco custo. Tire suas dúvidas e entenda o porquê desse carro motor ${this.motor} é o mais completo!`)

    }    
}

// Criamos o item novo da classe, indicando os parâmetros dentro dos parênteses para que recebam os valores certos:
const meuCarro = new Carro("Chevrolet Onix Plus", "Chevy", "Turbo de 116 CV", 2022);
console.log(meuCarro);

// Se necessário, chamaos os métodos deste novo item criado pondo seu nome e adicionando o método da classe:
meuCarro.descreverModelo();
meuCarro.anunciarCarro();



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

