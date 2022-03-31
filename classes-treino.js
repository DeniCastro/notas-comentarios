// Cria classe Vendedor com nome, cargo, vendas(array), comissão(vazia) e total das vendas(vazia):
class Vendedor{
    nome
    cargo
    vendas = []
    comissão = 0
    totalVendas = 0

    // Cria método para Calcular a comissão:
    calcularComissao(){
        this.comissao = this.totalVendas * this.cargo.percentual
    }

    // Cria um para total de vendas:
    calcularTotalDeVendas(){
        this.vendas.forEach((venda)=>{
            this.totalVendas = this.totalVendas + venda.valor
        })

    // Finaliza o total de vendas com a formatação "2fxd"
        this.totalVendas = this.totalVendas.toFixed(2)
    }
// Fecha a classe
}

// Cria uma classe para Venda:
class Venda{
    valor

    // Cria um metodo constructor para valor usando "this."
    constructor(valor){
        this.valor = valor
    }
// Fecha a classe
}

// Cria classe para Cargo(constructor não, percentual sim):
class Cargo{
    nome
    percentual
// Fecha a classe
}

// cria objetos vendedor 1 e 2, com seus percentuais:
var vendedor1 = new Cargo()
vendedor1.nome = "Vendedor Nível 1"
vendedor1.percentual = 0.05

var vendedor2 = new Cargo()
vendedor2.nome = "Vendedor Nível 2"
vendedor2.percentual = 0.1


// Cria o objeto do usuário como novo Vendedor(indicar nome e cargo):
var deni = new Vendedor()
deni.nome = 'Denilson Castro'
deni.cargo = vendedor2

// Cria as variáveis das vendas na classe Venda("valor"):
var venda1 = new Venda(150);
var venda2 = new Venda(295.01);

// O vendedor recebe push para o array das vendas(v1, v2, etc)
deni.vendas.push(venda1);
deni.vendas.push(venda2);

// Após o push. Utilize os métodos calcularTotalDeVendas e Calcular Comissão:
deni.calcularTotalDeVendas();
deni.calcularComissao();

// Exibe:
console.log(deni);

/*
São 3 classes(Vendedor, Cargo e Venda);
A maior é a do vendedor, que possui 7 membros, desses 7, 2 são métodos.
A classe venda, possui 1 membro(valor), que possui o constructor e muda dependendo da venda feita
A classe Cargo, possui 2 membros, que receberão o nome do cargo e o bônus da venda

*/ 
