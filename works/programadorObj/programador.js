const programador = {
  nome: "Flávio",
  idade: 37,
  tecnologias: [
    {nome: 'Javascript', especialidade: 'Tecnologias'},
    {nome: 'Javascript', especialidade: 'web/Mobile'}
  ]  
  
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)