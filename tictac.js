

const cells = document.getElementsByClassName("cell");
const mensajeGane = document.getElementById("mensaje");
// const mensaje = document.getElementById("mensaje");

const botonReiniciar = document.getElementById("reiniciar");

const jugadoX = document.getElementById("jugadorX");
const jugadorO = document.getElementById("jugadorO");


let turno = "jugador 1";
let juego = true;

let ganeX = 0;
let ganeO = 0;

let btns = []

for (let i = 0; i < cells.length; i++){
    let celda = cells[i];

    btns.push(celda)

    celda.addEventListener("click", function () {
        
        if(juego == true) {
            
                    if(turno == "jugador 1") {
                        if(celda.textContent.trim() === "") {
            
                            turno = "jugador 2"
                
                            celda.textContent = "x"
                            ganador()
                        }
                    }
                    else {
                        if(celda.textContent.trim() === "") {
            
                            turno = "jugador 1"
                
                            celda.textContent = "o"
                            ganador()
                        }
            
                    }

        }

      
    })

}

function ganador(){
    const combinacionesGanadoras = 
    [ [0,1,2], [3,4,5], [6,7,8], //Filas
    [0,3,6], [1,4,7], [2,5,8], // Columnas
    [0,4,8], [2,4,6]] //Diagonales

    for (let combinacion of combinacionesGanadoras) {
        if (btns[combinacion[0]].textContent === "x" && btns[combinacion[1]].textContent === "x" && btns[combinacion[2]].textContent === "x") {
            mensajeGane.textContent = "Ha ganado - X";
            ganeX++;

            jugadoX.textContent = ganeX;


            juego = false
       
        }

        if (btns[combinacion[0]].textContent === "o" && btns[combinacion[1]].textContent === "o" && btns[combinacion[2]].textContent === "o") {
             mensajeGane.textContent = "Ha ganado - O";
             juego = false

             
        }
    
        
        else {

            console.log(btns);
            
            if(btns.length == 0 && juego == true) {
                mensajeGane.textContent = "Empate";
            }
        
        }
    }

}


botonReiniciar.addEventListener("click", function() {
    location.reload()
})