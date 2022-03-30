// Criando Classes

class Livro{
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas.`)
    }
}
const NodeJS = new Livro("Primeiro Livro", "Casa do Codigo", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

console.log(typeof Livro)


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
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
