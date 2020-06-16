// Cálculo de Imc

const nome = 'Flávio'
const peso = 78
const altura = 1.69

const imc = peso/(altura * altura)

let message=""

if(imc >= 30){
  message = (`${nome} você está acima do peso`)
}else{
  message = (`${nome} você está abaixo do peso`)

}

console.log(message)