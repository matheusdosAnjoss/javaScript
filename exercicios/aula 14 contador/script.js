
function calcular() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
   

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados')     
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) { //Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            
        } else { //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
                res.innerHTML += `\u{1f3c1}`
    } 
}