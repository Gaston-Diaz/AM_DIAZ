let dataAPI = "./scripts/amazing.json";

$eventsTable = document.getElementById("eventsTable");

let eventsData = [];
let upEventsData = [];
let pastEventData = [];

async function fetchDataApi(){
    try{
        const response = await fetch(dataAPI);
        const data = await response.json();
        eventsData = data.events;
        upEventsData = data.events.filter(e => e.date >= data.currentDate);
        pastEventData = data.events.filter(e=> e.date <= data.currentDate);

        let attendanceP = eventsData.map(e => { //armo un array con la asistencia
            if (e.estimate) {
                return Number(e.estimate / e.capacity)
            }
            else {
                return Number(e.assistance / e.capacity)
            }
        })

        let capacity = eventsData.map(e=>e.capacity) // armo un array solo con las capacidades


        let maxAP = Math.max(...attendanceP); //traigo la mayor asistencia
        let minAP = Math.min(...attendanceP); //traigo la menor asistencia
        let maxCapacity = Math.max(...capacity); //traigo la mayor capacidad

        console.log(maxAP);
        console.log(minAP);
        console.log(maxCapacity);


    }
    catch{
        console.log(error);
    }
}
fetchDataApi()

