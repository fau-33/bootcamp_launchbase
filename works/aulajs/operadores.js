/*====================================
  OPERADORES DE COMPARAÇÃO

  >   Maior
  <   Menor
  >=  Maior igual a
  <=  Menor igual a
  ==  Igual a 
  === Igual e do mesmo tipo
  !=  Diferente de
  !== Diferente, inclusive do tipo 

===================================== */

// DESAFIO 1
const idade = 16
// Verificar se a pessoa é maior ou igual a  18 anos
// se sim, deixar entrar, se não, bloquear a entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

if(!(idade >= 18) || idade === 17 ) {
  console.log('Bloquear a entrada')
}else{
  console.log('Deixar entrar')
}



/*==================================================
    OPERADORES LÓGICOS

    && "E" As duas condições dever ser verdadeiras
        para que a condição final seja verdadeira
    || "OU" Uma das condições devem ser verdadeira
        para que a condiçõa seja verdadeira.
     ! "NÃO" Nega uma condição      

==================================================== */
// console.log(5 == 5 && 6 == 6)// true
// console.log(5 == 5 && 6 != 6)// false

// console.log(5 == 5 || 6 == 6)// true
// console.log(5 == 5 || 6 != 6)// true

// console.log(!(5 > 6))//true
// console.log(!(5 < 6))// false

/*==================================================
    OPERADORES ARITMÉTICOS

    * Multiplicação
    / Divisão
    + Adição
    - Subtração


==================================================== */

// console.log( 2 * 2)// 4
// console.log( 2 / 2)// 1
// console.log( 2 % 1.5)// 0.5
// console.log( 2 + 2)// 4
// console.log( 2 - 2)// 0