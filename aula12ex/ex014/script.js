function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'foto-manha.png'
        document.body.style.background = '#FCD99E'
    } else if (hora < 18) {
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'foto-tarde.png'
        document.body.style.background = '#B3654F'
    } else {
        msg.innerHTML += '<p>Boa Noite!</p>'
        img.src = 'foto-noite.png'
        document.body.style.background = '#081817'
    }
}