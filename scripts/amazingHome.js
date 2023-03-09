  import data from './data.js'
/*
  let fragmento = document.createDocumentFragment();

  function cards(array, containerCard){
    for(let event of array.events){
      let div = document.createElement("div");
      div.className = "cardDiv"
      div.innerHTML += `
      <div style="width: 18rem;" class="card">
      <img src="${event.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${event.description}</p>
      </div>
      <div class="card-footer">
        Price ${event.price}
        <a href="./details.html" class="btn btn-primary">details</a>
      </div>
    </div>
      `
      fragmento.appendChild(div);
    }
    containerCard.appendChild(fragmento);
  }
  cards(data,containerCard);
*/

let $containerCard = document.getElementById('containerCard') // capturar el elemento conteiner de las cards
let fragment = document.createDocumentFragment();

let $checkboxDiv = document.getElementById('checkboxDiv') //capturar el elemento contenedor de los checkbox
let $inputSearch = document.getElementById('inputSearch') // capturo el input de busqueda

//creacion de las cards dinamicas
const crearCards = (array, containerCard) =>{
  $containerCard.innerHTML = ""
  //let eventos = array.events
  array.forEach(event => {

    let card = document.createElement('div')
    card.className = `cardDiv ${event.name.toLowerCase()}`
    card.innerHTML = `
    <div style="width: 18rem;" class="card">
      <img src="${event.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${event.description}</p>
      </div>
      <div class="card-footer">
        Price ${event.price}
        <a href="./details.html" class="btn btn-primary">details</a>
      </div>
    </div>
    `
    fragment.appendChild(card);

  });
  containerCard.appendChild(fragment);
}

crearCards(data.events, $containerCard)

//Barra de busqueda por nombre
const filtrarSearch = (array,value) =>{ //array va a aser la lista con los datos y value es el parametro de entrada del search
  let filteredArray = array.filter(evento => evento.name.toLowerCase().includes(value.toLowerCase().trim())) // trim saca los espacios del principio y final de los caracteres
  return filteredArray
}


