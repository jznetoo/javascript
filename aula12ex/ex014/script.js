

function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();
    var datamin = new Date();
    var min = datamin.getMinutes();
    
    msg.innerHTML = `Agora são ${hora}:${min}`;
    
    if (hora >= 1 && hora <= 5) {
        msg.innerHTML += ' da madrugada.';
        img.src = "madrugada.png";
        document.body.style.background = 'rgb(66 54 68)';
    } else if (hora > 5 && hora < 12) {
        msg.innerHTML += ' da manhã.';
        img.src = "manha.png";
        document.body.style.background = 'rgb(211 192 167)';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' da tarde.';
        img.src = "tarde.png";
        document.body.style.background = 'rgb(206 131 111)';
    } else {
        msg.innerHTML += ' da noite.';
        img.src = "noite.png";
        document.body.style.background = 'rgb(57 84 101)';
    }
    
}
