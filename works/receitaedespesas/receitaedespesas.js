const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

//Calcula a soma das receitas
//Calcula a soma das despesas
//de usuarios
//retornar saldo receitas - despesas

//função calculaSaldo recebe receitas e despesas
//do USUARIO
//receitas é um array
//despesas é um array
function calculaSaldo(receitas, despesas){
  //preciso usa a função somaNumeros()
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);
  
  

  // dever retornar receitas-despesas
  return somaReceitas - somaDespesas
}

//numeros é um array
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for(let numero of numeros){
    soma = soma + numero
  }
  //retorna a soma dos numeros
  return soma;
}

const soma = somaNumeros(usuarios[0].despesas)
//console.log(soma);

//Percorra o array de usuarios
for(usuario of usuarios){

  //para cada usuário chame
  // uma função chamada 
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas);
  

  //SE o saldo é POSITIVO ou NEGATIVO
  const saldoPositivo = saldo >= 0

  let positivoOuNegativo;
  
  if(saldoPositivo){
      positivoOuNegativo = 'POSITIVO';
  }else{
    positivoOuNegativo = 'NEGATIVO';
  }
  console.log(`${usuario.nome} possui ${positivoOuNegativo} de ${saldo.toFixed(2)}`);
 }