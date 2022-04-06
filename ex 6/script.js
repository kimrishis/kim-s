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
function inlista(n, l) { 
if (lista.indexOF(Number(n)) != -1) {
    return true
} else {
        return false
    }
}

function adicionar() {

    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.next = `valor ${num.value} adicionado`
        lista.appendChild(item)
        
    } else { 
        window.alert('valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores) {
            if (valores[pos] > maior)
               maior = valores[pos]
            if (valores[por] < menor)
                menor = valores[pos]   
        }
        media = soma / total
        res.innerHTML= ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media}. </p>`
    }
}