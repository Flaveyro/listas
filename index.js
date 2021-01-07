window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    listaCosas = document.getElementById("listaCosas");
    
    botonEnvio.addEventListener("click",anadir);

    //////////////////////////////////
    botonSUBEnvio = document.querySelector('[type="button"]');
    nuevoSUBItem = document.querySelector('[type="text"]');
    listaCosasSub = document.getElementById("listaCosasSub");
    botonSUBEnvio.addEventListener("click",anadirSub);
    ////////////////
}



function anadir(element){
    evento = element || window.event;
    if (nuevoItem.value == ""){
        evento.preventDefault();
    }else{
    var lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    lista.addEventListener("dblclick",eliminarLi);
    listaCosas.appendChild(lista);
    nuevoItem.value = "";
    }
} 

///////////////
function anadirSub(element){
    evento = element || window.event;
    if (nuevoSUBItem.value == ""){
        evento.preventDefault();
    }else{
    var Sublista = document.createElement("li");
    Sublista.innerHTML = nuevoSUBItem.value;
    Sublista.addEventListener("dblclick",eliminarLi);
    listaCosasSub.appendChild(Sublista);
    nuevoSUBItem.value = "";
    }
} 
//////////////

function eliminarLi(){
    this.parentNode.removeChild(this);
}