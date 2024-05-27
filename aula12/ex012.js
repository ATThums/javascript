var agora = new Date( ) //Pega a data do dia atual
var hora = agora.getHours() //Pega a hora do dia atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa Noite!')
}