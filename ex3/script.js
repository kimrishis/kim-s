function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
     if (fano.value.length == 0 || fano.value > ano) {
            window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setattribute('id', 'foto')
            if (fsex[0].checked) {genero = 'homem'
                if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'bb-h.jpg')
            }   else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'menino-criança.jpg')
            }    else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            }    else {
                //idoso
                img.setAttribute('src', 'homem-velho.jpg')
            }
        }else if (fsex[1].checked) {genero = 'mulher'
            if (idade >=0 && idade < 10){
            // criança
        }    else if (idade >= 10 && idade < 21){
            //jovem
        }    else if (idade < 50){
            // adulto
        }    else {
            //idoso
        }
    
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${genero} com ${idade} anos`            
    res.appendChild(img)
    }
}
