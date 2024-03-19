let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Introduce un Número del 1 al 10';

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;   
}

function verificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p',`Adivinaste el Número Secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    

    } else {
        //El usuario no acerto.
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento ('p','El Número Secreto es Menor');
        } else {
            asignarTextoElemento ('p','El Número Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario').value = ' ';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros mostraremos un mensaje en la pantalla y finaliza el juego, si no, seguimos jugando.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números disponibles');
    }else {
        //Si el numero generado esta incluido en la lista, hacemos una operacion, si no, hacemos otra.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Introduce un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros.
    //Generar numero aleatorio.
    //Inicializar el numero de Intentos.
    condicionesIniciales();
    //Deshabilitar el boton de nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales ();
