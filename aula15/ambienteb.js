let num = [5, 8, 2, 9, 3]
console.log(num)
num.push(1) //Adiciona o valor no final
num.sort() //Coloca em ordem de grandeza / do menor ao maior
let pos = num.indexOf(2)
console.log(`o valor 2 está na posição ${pos}`)

let posa = num.indexOf(20) //Quando o valor não existir no array, o resultado será -1
console.log(posa)

if (posa == -1){
    console.log(`O valor não foi encontrado!`)
}
/*console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num[4])*/

for (c = 0; c < num.length; c++) {
    console.log(`O valor no índice ${c} é ${num[c]}`)
}

