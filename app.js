let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 4;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${intentos == 1 ? " intento" : " intentos"}!` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo(){
    document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se sortearon todo los números
    if (listaNumerosSorteados.length == numeroMaximoIntentos){
        asignarTextoElemento('p', 'Has alcanzado el número máximo de intentos');
    } else {
        //Si el número generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Bienvenido al Juego del número secreto');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCampo();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio otra vez
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
