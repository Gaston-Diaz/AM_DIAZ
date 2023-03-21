let dataAPI = './scripts/amazing.json'

let eventsData = [];
let cDate ;

async function fetchDataApi(){
  try {
    const response = await fetch(dataAPI);
    const data = await response.json();
    eventsData = data.events;
    cDate = data.currentDate;

    let $containerCard = document.getElementById("containerCard"); // capturar el elemento conteiner de las cards
    let fragment = document.createDocumentFragment();

    let $checkboxDiv = document.getElementById("checkboxDiv"); //capturar el elemento contenedor de los checkbox
    let $inputSearch = document.getElementById("inputSearch"); // capturo el input de busqueda

    //creacion de las cards dinamicas
    const crearCards = (array, date, containerCard) => {
      $containerCard.innerHTML = "";
      //let eventos = array.events
      array.forEach((event) => {
        if (event.date <= date) {
          let card = document.createElement("div");
          card.className = `cardDiv ${event.name.toLowerCase()}`;
          card.innerHTML = `
    <div style="width: 18rem;" class="card">
      <img src="${event.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
      </div>
      <div class="card-footer">
        Price ${event.price}
        <a href="./details.html?id=${event._id}" class="btn btn-primary">details</a>
      </div>
    </div>
    `;
          fragment.appendChild(card);
        }
      });
      containerCard.appendChild(fragment);
    };
    crearCards(eventsData, cDate, $containerCard); //agregue la fecha para que funcione la validacion

    //Barra de busqueda por nombre
    const filtrarSearch = (array, value) => {
      //array va a aser la lista con los datos y value es el parametro de entrada del search
      let filteredArray = array.filter((evento) =>
        evento.name.toLowerCase().includes(value.toLowerCase().trim())
      ); // trim saca los espacios del principio y final de los caracteres
      return filteredArray;
    };

    const capturarCategorias = (array) => {
      //hago un array con las categorias de eventos
      let arrayCategorias = array.map((evento) => evento.category);
      //let sinRepetir = Array.from(new Set(arrayCategorias))
      let sinRepetir = [...new Set(arrayCategorias)]; // suelta los elementos dentro de sinRepetir
      return sinRepetir;
    };
    let categorias = capturarCategorias(eventsData);

    const crearCheckbox = (array, checkboxDiv) => {
      //se crean las checkbox dinamicas
      let aux = "";
      array.forEach(
        (element) =>
          (aux += `
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id=${element} value=${element}>
    <label class="form-check-label" for=${element}>${element}</label>
  </div>
  `)
      );
      checkboxDiv.innerHTML = aux;
    };
    crearCheckbox(categorias, $checkboxDiv);

    const filtroCheckbox = (array, value) => {
      // se muestarn las cards que cumplen con la categoria del checkbox
      let arrayFiltrado = array.filter((evento) =>
        evento.category.toLowerCase().includes(value.toLowerCase())
      );
      return arrayFiltrado;
    };

    $checkboxDiv.addEventListener("change", (e) => {
      console.log(e.target.value);
      let nArray = filtroCheckbox(eventsData, e.target.value);
      crearCards(nArray, cDate, $containerCard);
    });

    $inputSearch.addEventListener("keyup", (e) => {
      let nArray = filtrarSearch(eventsData, e.target.value); //mando el texto que busco y me devuelve los elementos que coinciden
      console.log(nArray);
      crearCards(nArray, cDate, $containerCard); //agregue la fecha para que funcione la validacion
    });
  } catch {
    console.log(error);
  }
}

fetchDataApi()





