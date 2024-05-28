
function contar() {
    
    var vinicio = document.getElementById('txti')
    var vfim = document.getElementById('txtf')
    var vpasso = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    
    if(vinicio.value.length == 0 || vfim.value.length == 0 || vpasso.value.length == 0) /*Verificação de dados*/{
        res.innerHTML = `Impossível contar!` //Mensagem de erro / Falta de Dados
        //window.alert('[ERRO] Verifique os dados informados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(vinicio.value) //Transformação dos dados em Números
        var f = Number(vfim.value)
        var p = Number(vpasso.value)
                
        if (p > 0) {
            if (i < f){
                //Contagem crescente
                for (let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1f449} `
                }
            } else {
                //Contagem decrescente
                for (let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1f449} `
                }            
            }    
            res.innerHTML += `\u{1f3f4}`
        } else {
            alert(`Passo Inválido, será considerando passo 1`)
            p = 1
            if (i < f){
                //Contagem crescente
                for (let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1f449} `
                }
            } else {
                //Contagem decrescente
                for (let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1f449} `
                }            
            }    
            res.innerHTML += `\u{1f3f4}`
        }
    }
}