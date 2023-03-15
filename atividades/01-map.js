const nums = [1,2,3,4,5]
console.log(nums.map(numero => numero * 2))
console.log(nums.filter(numero => numero % 2 == 1))
console.log(nums.reduce((acumulador, numero) => acumulador *= numero ))
nums.forEach(n => n *=2)
Array.prototype.meuMap = function (callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i]))
    }
    return novoArray
}


console.log(nums.meuMap(numero => numero * 2))

const carrinho = [
    {nome: 'Caneta',qtde: 10, preco:7.99},
    {nome: 'Impressora',qtde: 0, preco:649.5},
    {nome: 'Caderno',qtde: 4, preco:27.10},
    {nome: 'Lapis',qtde: 3, preco:5.82},
    {nome: 'Tesoura',qtde: 1, preco:19.20}
]
console.log("---------Carrinho---------")

const carrinhoNomes = carrinho.map(item => item.nome)
console.log(carrinhoNomes)
console.log(carrinho.map((item, indice) => carrinhoNomes[indice] + " | Quantidade * Preco: R$" + item.qtde * item.preco))
