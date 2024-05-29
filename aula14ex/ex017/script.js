function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')

    if (num.value == 0){
        alert(`Verifique os dados informados!!`)
    } else{        
        var n = Number(num.value) 
        var c = 1
        tab.innerHTML = ` `
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }    
}

/*
function tabuada(){
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    var mult
    res.innerHTML = ` `

    if (num.value == 0){
        alert(`Verifique os dados informados!!`)
    } else{        
        var n = Number(num.value) 
        for (c = 1; c < 11; c++){
            mult = c * n
            res.innerHTML += `${c} * ${n} = ${mult} <br>`
        }
    }
    
}*/