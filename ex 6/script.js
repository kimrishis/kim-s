let num = document.querySelector('imput#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) { 
 if(Number(n) >=1 && Number(n) <= 100) {
return true
 } else {
     return false
 }
}
function inlista(n, 1){ 
if (lista.indexOF(Number(n)) != -1) {
    return true
} else {
        return false
    }
}

function adicionar() {

    if(isnumero(num.value) && !inlista(num.value, valores)){
        
    } else { 
        window.alert('valor invalido ou já encontrado na lista.')
    }
}

