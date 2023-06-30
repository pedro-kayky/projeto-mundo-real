import { baseUrl, eventsQuantity } from "../variables.js";
async function userEvents(userName) {
const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`);
return await response.json();
}

function getUserEvents(userName) {
userEvents(userName).then(eventsData => {
    let eventsRecents = "";
    eventsData.forEach(event => {
    eventsRecents += `<li><h3>${event.repo.name}</h3><p>${event.type}</p></li>`;
    });
    document.querySelector('.profile-data').innerHTML += `
    <div class="events section">
        <h2>Eventos recentes</h2>
        <ul>${eventsRecents}</ul>
    </div>
    `;
});
}


export { getUserEvents };
