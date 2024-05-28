function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // cria um img em HTML / nesse caso, ao final da div
        img.setAttribute('id', 'foto') // Cria um id='foto' dentro do img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'homem-crianca.png') //Altera o atributo src para a imagem desejada
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade < 10){
                //criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}