// Usuários e tecnologias

const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS']},
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS']},
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js']}
];

//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

//Por exemplo:

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  //return dois
  for(let tecnologia of usuario.tecnologias){
    const encontreiTecnologiaCSS = tecnologia == 'CSS'
    if(encontreiTecnologiaCSS){
      return true;
    }
  }
  return false;
};



for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}


//5 coisas que você Precisa saber sobre funções(iniciantes)
//1 of 6 - Escrever uma função/ criar uma função - 20%
//2 of 6 = Saber envia vários dados para dentro da função - 20%
//3 of 6 = Saber como envia um dado para FORA da função - 20%
//4 of 6 - Saber utilizar a função / executar uma função - 20%
//5 of 6 - Saber como enviar os dados para dentro da função Quando executar ela - 20%
//6 of 6 - Saber como CAPTURAR o dado enviado de dentro para fora - 20%

//Curiosidade extra que você deveria está  sabendo sobre função(iniciante)
//Para que serve a função?
//Para reutilizar o bloco de código.

//Qual o objetivo?
//Para eu não repetir o mesmo código.

//Porque vou usar função?

// A função não precisa obrigatoriamente RECEBER ou RETORNA valores




//Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

//Todo Array [] recebe funções e propriedades nativas, eu posso usar a propriedade
//length para saber quantos elementos eu tenho no meu array
//[].length

//para(usuario de usarios)
// for(let usuario of usuarios){
//   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
// }
  
