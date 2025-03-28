/*Traigo todos los nombres desde el DOM*/
const namesNodeList = document.querySelectorAll(".person > h2 > a");
/*Los transformo en un array*/
const namesArray = Array.from(namesNodeList);

/*Traigo el primer y unico formulario del DOM*/
const form = document.forms[0];
/*Guardo en la variable buscador el input 'search'*/
const buscador = form.elements.search;

/*Genero un array con los nombres en mayúsculas*/
let mayusNames = namesArray.map((person) => person.innerText.toUpperCase());

/*Por cada imput en 'search' se ejecuta*/
buscador.oninput = function () {
  for (name of mayusNames) {
    //Itero el array de nombres en mayuscula
    if (!name.includes(buscador.value.toUpperCase())) {
      /*Si el nombre de la persona no incluye el calor introducido en el 'search' oculta cada nodo*/
      namesNodeList.forEach(function (currentValue) {
        if (currentValue.innerText.toUpperCase() === name) {
          currentValue.parentElement.parentElement.style.display = "none";
        }
      }, name);
    } else {
      //Caso contrario el nombre esta incluido muestra el nodo
      namesNodeList.forEach(function (currentValue) {
        if (currentValue.innerText.toUpperCase() === name) {
          currentValue.parentElement.parentElement.style.display = "";
        }
      }, name);
    }
  }
};

form.onsubmit = () => false; //El formulario no se envía.
