// Import stylesheets
import './style.css';

//Variables globales
let lista1 = [19, 37, 29, 18, 34, 24, 16, 17, 16, 20];
let lista2 = [16, 21, 24, 27, 47, 10, 78, 23, 28, 30];
let lista3 = [];

// Write Javascript code!
function onInit() {
  //Combinación en a los dos arreglos
  lista3 = lista1.concat(lista2);

  //Ordenamiento de valores
  lista3 = ordenarItems(lista3);

  setAlert();
}

/**
 * Ordena valores de forma descendente
 * 
 * @param {array} items
 * @returns {array}
 */
function ordenarItems(items) {
  return items.sort((a, b) => b - a);
}

/**
 * Función para mostrar resultado
 * 
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    <p>Lista 1: [${lista1.toString()}]</p>
    <p>Lista 2: [${lista2.toString()}]</p>
    <p>Combinación y ordenamiento descendente: [${lista3.toString()}]</p>
  </div>
  `;
}


onInit();