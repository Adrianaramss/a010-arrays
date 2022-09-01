//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação 
//booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.


const arrayNum = [33, 10, 4, 22]
const arrayString = ["maça", "uva", "abacate"]
const arraymistura = ["oi!", 55, true ]


console.log (arrayNum.length)
console.log (arrayString.length)
console.log (arraymistura.length)

console.log (arrayNum [0])
console.log (arrayString[1])
console.log (arraymistura[2])

const arrayverdadeira = arrayNum.includes(10)
console.log (arrayverdadeira)
const  arrayfalso = arrayNum.includes(2)
console.log (arrayfalso)
///