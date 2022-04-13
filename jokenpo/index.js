function escolha(id){
    // preencher com a escolha do player
   
    var randomcpu= Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if (randomcpu==1) {
        document.getElementById("cpu").className= 'nes-charmander'
    }
    if (randomcpu==2) {
    document.getElementById("cpu").className= 'nes-bulbasaur'
    }
    if (randomcpu==3) {
    document.getElementById("cpu").className= 'nes-squirtle'
    } 
    if (id==1){
        document.getElementById("player").className='nes-charmander'
        
        }
    if (id==2){
        document.getElementById("player").className='nes-bulbasaur'
      
  }
    if (id==3){
      document.getElementById("player").className='nes-squirtle'
    }

    document.getElementById("resultado").innerText= ""
   
if (id==1 && randomcpu==1){
    document.getElementById("resultado").innerText="empate"
    }
    if (id==2 && randomcpu==2){
    document.getElementById("resultado").innerText="empate"
    }
    if (id==3 && randomcpu==3){
    document.getElementById("resultado").innerText="empate"
    }
    if (id==1 && randomcpu==2){
    document.getElementById("resultado").innerText="vitoria"
    }
    if (id==3 && randomcpu==1){
    document.getElementById("resultado").innerText="vitoria"
    }    
    if (id==2 && randomcpu==3){
    document.getElementById("resultado").innerText="vitoria"
    }
    if (id==1 && randomcpu==3){
    document.getElementById("resultado").innerText="derrota"
    }
    if (id==2 && randomcpu==1){
    document.getElementById("resultado").innerText="derrota"
    }
    if (id==3 && randomcpu==2){
    document.getElementById("resultado").innerText="derrota"
    }

}

