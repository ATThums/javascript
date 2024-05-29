console.log(`Forma tradicional`)
let valores = [5, 8, 2, 9, 3]
valores.sort()
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`O valor no índice ${pos} é ${valores[pos]}`)
}

console.log(`Forma simplificada`)

let num = [5, 8, 2, 9, 3]
//Simplificando
for(let pos in num){
    console.log(`O valor no índice ${pos} é ${num[pos]}`)
}