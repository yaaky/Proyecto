

const cells = document.getElementsByClassName("cell");
const turnoDisplay = document.getElementById("turno");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");


for (let i = 0; i < cells.length; i++){

cells[i].addEventListener("click",function name() {
    cells[i].innerHTML="X"

    //realizar fonciunalidad que hace que la computadora juege usando el math randon.
    let random = Math.floor(Math.random() * 9)
    cells[random].innerHTML="O"
    cells[i].removeEventListener("click", name)
  



    turnoDisplay.innerHTML="Turno Jugador 2"


    mensaje.innerHTML="El jugador 1 ha ganado"


    
    
    botonReiniciar.addEventListener("click", function(){
        location.reload("click")


        
    })
    
})

}