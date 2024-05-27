var idade = 68
console.log(`Sua idade é de ${idade} anos!`)
if (idade < 16){
    console.log('Você não pode votar')
} else if (idade < 18 || idade > 67) {
    console.log('Seu Voto é opcional')    
} else {
    console.log('Seu voto é obrigatório')
}