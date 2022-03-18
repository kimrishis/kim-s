function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = 'agora são $(hora) horas.'
if (hora >= 0 && hora < 12 ) {
    //Bom dia!
    img.src = 'pexels-jonathan-petersson-1237119.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'pexels-quang-nguyen-vinh-2132180.jpg'
    document.body.style.background = '#b9846f'
} else {
   // BOA NOITE!!!!
   img.src = 'pexels-piccinng-3052361.jpg' 
   document.body.style.background = '#515154'
}
} 
