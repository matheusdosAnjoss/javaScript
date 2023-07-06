let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnum(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
       window.alert('Valor invalido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0 ){
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]


        for(let pos in valores) {
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }
            
    }
          
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res,innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res,innerHTML += `<p>O maior valor informado foi ${menor}</p>
        
     }
}
