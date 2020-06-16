// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo de média

const alunos = [
  {
    nome: "Flávio",
    nota: 9.8
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const nomesDeAlunos = ["Flávio", "Diego", "Fulano"]
console.log(nomesDeAlunos)





const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

// Se a média for maior que 5, parabenizar a turma

if (media > 5){
  console.log(`A média foi de ${media}, Parabéns`)
}else{
  console.log(`A média é menor que 5`)
}





