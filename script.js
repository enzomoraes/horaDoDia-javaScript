function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = '../img/fotomanha.png'
        window.document.body.style.background = '#bba78a'
    }else if (hora >=12 && hora <= 18) {
        // Boa tarde
        img.src = '../img/fototarde.png'
            window.document.body.style.background = '#5c84a4'
    }else{
        // Boa noite
        img.src = '../img/fotonoite.png'
        window.document.body.style.background = '#b86303'
    }
}