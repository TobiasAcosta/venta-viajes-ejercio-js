import {barcelona, roma, paris, londres} from './ciudades.js';
const enlaces = document.querySelectorAll('a');
const tituloElemento = document.getElementById('titulo');
const subTituloElemento = document.getElementById('subtitulo');
const parrafoElemento = document.getElementById('parrafo');
const precioElemento = document.getElementById('precio');

enlaces.forEach( enlace => {
    enlace.addEventListener('click', ()=>{
        //remover clase active a todos los enlaces
        enlaces.forEach(enlace => {
            enlace.classList.remove('active');
        })
        //agregamos la clase active en el elemento en el que se hizo click
        enlace.classList.add('active');
        //traer la info del objeto correspondiente
        let contenido = obtenerDataBase(enlace.textContent);
        //imprimimos en pantalla
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML= contenido.precio;
    })  
})

//traemos los datos desde ciudad.js
function obtenerDataBase(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }; 
    return contenido[enlace]
}