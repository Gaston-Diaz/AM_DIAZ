let dataAPI = "./scripts/amazing.json";

let eventsData = [];

async function fetchDataApi() {
  try {
    const response = await fetch(dataAPI);
    const data = await response.json();
    eventsData = data.events;

    let detailContainer = document.querySelector("#containerCard");

    const queryString = location.search;

    const params = new URLSearchParams(queryString);

    const eventId = params.get("id");

    const event = eventsData.find((event) => event._id == eventId);

    console.log(event);

    function crearDetails(event, container) {
      let div = document.createElement("div");
      div.innerHTML = `
    <div class="card mb-3" style="max-width: 100%;">
     <div class="row g-0">
        <div class="col-md-4">
         <img src="${event.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title" style="text-align: center;">${event.name}</h2>
                <p class="card-text" style="text-align: center;">${event.description}</p>
                <ul>
                    <li><b>category</b>: ${event.category}</li>
                    <li><b>place:</b> ${event.place}</li>
                    <li><b>capacity:</b> ${event.capacity}</li>
                    <li><b>date:</b> ${event.date}</li>
                    <li><b>price:</b> ${event.price}</li>
                </ul>
            </div>
        </div>
     </div>
    </div>
    `;
      container.appendChild(div);
    }

    crearDetails(event, detailContainer);
  } catch {
    console.log(error);
  }
}
fetchDataApi();
