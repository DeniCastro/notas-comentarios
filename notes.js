// Funcção para calcular o quadrado de um número:

function calcularQuadrado() {
    num = prompt('Digite um número para ver o seu quadrado: ')
    quadrado = num * num
    alert('O resultado é: ' + quadrado)
  }
calcularQuadrado();




// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Atribuindo objetos a classes:  nome completo - idade - data de nascimento - estilo de musica - tem carro - tem filhos 

class Pessoa {
  nome
  idade
  data
  estiloMusica
  carros
  filhos
}
var eu = new Pessoa()
eu.nome = 'Deni'
eu.nomeCompleto ='Deni Castro de Oliveira'
eu.idade = 25
eu.data = '04-01-1997'
eu.estiloMusica = 'Dubstep'
eu.carros = false
eu.filhos = false

let vc = new Pessoa()
vc.nome = 'jxnglejxice'
console.log(vc)
alert(vc.nome)
/---------------------
class Pessoa {
  nome
  anoNascimento
  calcularIdade(anoAtual) {
    return  2022 - this.anoNascimento
  }
  
}
var eu = new Pessoa()
eu.nomeCompleto ='Deni Castro de Oliveira'
eu.anoNascimento = 1997
var idade = eu.calcularIdade(2022)
console.log(idade)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class Pessoa {
  
  nome
  anoNascimento
  idade
  calcularIdade(anoAtual) {
    this.idade = anoAtual - this.anoNascimento
  }
  
}
var eu = new Pessoa()
eu.nomeCompleto ='Deni Castro de Oliveira'
eu.anoNascimento = 1997
eu.calcularIdade(2022)
autenticar(eu)

function autenticar(pessoa){
  console.log(pessoa)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
class Pessoa {
  
  nomeCompleto
  anoNascimento
  idade
  
  constructor(nome, anoNascimento) {
    this.nomeCompleto = nome
    this.anoNascimento = anoNascimento
    this.calcularIdade()
    
  }
  
  calcularIdade(anoAtual) {
    this.idade = 2022 - this.anoNascimento
  }
} 

let eu = new Pessoa("Deni", 1997)          //Estanciando objeto da classe
console.log(eu)

let vc = new Pessoa("JxngleJxice", 1779)
console.log(vc)


class Vendedor {
  nome
  cargo
  vendas = []
  comissao = 0
  totalVendas = 0
  
  calcularComissao() {
    this.comissao = this.totalVendas * this.cargo.percentual
  }

  calcularTotalDeVendas() {
    this.vendas.forEach((venda) => {
      this.totalVendas = this.totalVendas + venda.valor
    })
    
    this.totalVendas = this.totalVendas.toFixed(2)
  }
}

class Venda {
  valor
  
  constructor(valor) {
    this.valor = valor
  }
}

class Cargo {
  nome
  percentual
}

var vendedor1 = new Cargo()
vendedor1.nome = "Vendedor Nível 1"
vendedor1.percentual = 0.05

var vendedor2 = new Cargo()
vendedor2.nome = "Vendedor Nível 2"
vendedor2.percentual = 0.1

var joaozinho = new Vendedor()
joaozinho.nome = "João"
joaozinho.cargo = vendedor1

var venda1 = new Venda(10.50)
var venda2 = new Venda(9.50)

joaozinho.vendas.push(venda1)
joaozinho.vendas.push(venda2)

joaozinho.calcularTotalDeVendas()
joaozinho.calcularComissao()

console.log(joaozinho)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Funcões para calcular média

var array = [70, 70, 80];
array.push(20, 45, 100);
console.log(array)

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    const media = soma / (array.length);
}
