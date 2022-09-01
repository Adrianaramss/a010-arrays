//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, 
//chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;





const arrayNum = [33, 10, 4, 22]
const arrayNumcopia = arrayNum.slice();
arrayNumcopia.push(15)
console.log (arrayNumcopia)
console.log (arrayNum)

const arrayString = ["maça", "uva", "abacate"]
const arrayStringcopia =  arrayString.slice();
arrayStringcopia.pop()
console.log (arrayStringcopia)
console.log (arrayString)

const arraymistura = ["oi!", 55, true]
const arraymisturacopia = arraymistura.slice();
arraymisturacopia.splice(1,1)
console.log (arraymisturacopia)
console.log (arraymistura)



