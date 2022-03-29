function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var backgrounddia = '#e2cd9f'
var backgroundtarde = '#b9846f'
var backgroundnoite = '#515154'
var bodystyle = document.body.style 
msg.innerHTML = `agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
    //Bom dia!
    img.src = 'dia.jpg'
    bodystyle.background = backgrounddia 
  
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'tarde.jpg'
    bodystyle.background = backgroundtarde
} else {
   // BOA NOITE!!!!
   img.src = 'noite.jpg' 
   bodystyle.background = backgroundnoite  

}
} 
