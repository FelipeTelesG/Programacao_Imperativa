let carrinho = [];
let valorCarrinho = 0;
let produtos = [
  {
    nomeProduto: 'Garrafa Térmica',
    valorProduto: 40.59,
    qldProduto: 'Boa',
    status: 'Disponivel'
  },
  {
    nomeProduto: 'Luvas de Couro',
    valorProduto: 94.99,
    qldProduto: 'Boa',
    status: 'Falta'
  },
  {
    nomeProduto: 'Oakley',
    valorProduto: 549.90,
    qldProduto: 'Boa',
    status: 'Disponivel'
  },
];

for(let i = 0; i < produtos.length; i++){
  if (produtos[i].status === 'Disponivel'){
    carrinho.push(produtos[i]);
    valorCarrinho += produtos[i].valorProduto;
  }
}

for(let i =0; i < carrinho.length; i++){
  console.log('Produto:', carrinho[i].nomeProduto, ',valor: R$', carrinho[i].valorProduto)
}
console.log('Total gasto R$', valorCarrinho);
