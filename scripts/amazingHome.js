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

let $containerCard = document.getElementById('containerCard')
let fragment = document.createDocumentFragment();

const crearCards = (array, containerCard) =>{
  $containerCard.innerHTML = ""
  let eventos = array.events
  eventos.forEach(event => {

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

crearCards(data, $containerCard)


