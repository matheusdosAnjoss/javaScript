function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora}:${min} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = `manhã.png`
        document.body.style.background = '#d9a188'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#935d6a'
    } else {
        //boa noite
        img.src =  'noite.png'
        document.body.style.background = '#4e3d5f'
    }
}
