// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function validarInputNombre(nombreAmigo){
    var regexNombre = /^[a-zA-Z\s-]+$/;

    if(!regexNombre.test(nombreAmigo)){
        alert('Por favor, inserte un nombre válido.');
        document.getElementById('amigo').focus();
        return false;
    }else{
        
        return true;
    }
}

function limpiarInputNombre() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (var i = 0; i < amigos.length; i++) {
        
        if (i == 0)
        {
            var listHeader = document.createElement('li');
            listHeader.textContent = "Lista de los nombres de tus amigos:".toUpperCase();
            var elementoCabecera = lista.appendChild(listHeader);
            elementoCabecera.style.fontWeight = "bolder";

        }
        
        var elemento = amigos[i];
        var listItem = document.createElement('li');
        listItem.textContent = elemento.toUpperCase();
        lista.appendChild(listItem);
        
    }

    return;
}

function mostrarAmigo(nombreAmigo){
    let lista = document.getElementById('resultado');
    lista.innerHTML = "";

    var listHeader = document.createElement('li');
    listHeader.textContent = "El nombre de tu amigo(a) seleccionado es:".toUpperCase();
    var elementoCabecera = lista.appendChild(listHeader);
    elementoCabecera.style.fontWeight = "bolder";

    var listItem = document.createElement('li');
    listItem.textContent = nombreAmigo.toUpperCase();
    lista.appendChild(listItem);

    return;

}

function sortearAmigo()
{
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    
    if (amigos.length != 0) {
        mostrarAmigo(amigos[indiceAleatorio]);
    } 
    else
    {
        alert('Por favor, inserte un nombre válido.');
        return false;
    }

    return;
}

function agregarAmigo(){

    var nombreAmigo = document.getElementById('amigo').value;
  

    if (validarInputNombre(nombreAmigo))
    {
        
        if (amigos.includes(nombreAmigo)) {
            return false;
        } else {
            amigos.push(nombreAmigo);
            limpiarInputNombre();
            mostrarLista();

            return true;
        }
    }else{
        return false;
    }

}

