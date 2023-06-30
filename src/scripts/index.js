
import { getUser } from "/src/scripts/services/user.js";
import { getRepositories } from "/src/scripts/services/repositories.js";
import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";
import { getUserEvents } from "/src/scripts/services/commits.js";

document.getElementById('btn-search').addEventListener('click', () => {
const userName = document.getElementById('input-search').value;
if (validateEmptyInpution(userName)) return;
getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
const userName = e.target.value;
const key = e.which || e.keyCode;
const isEnterKeyPressed = key === 13;

if (isEnterKeyPressed) {
    if (validateEmptyInpution(userName)) return;
    getUserData(userName);
}
});

function validateEmptyInpution(userName) {
if (userName.length === 0) {
    alert('preencha o campo com o nome do usuário do GitHub');
    return true;
}
}

async function getUserData(userName) {
const userResponse = await getUser(userName);
if (userResponse.message === "Not Found") {
    screen.renderUserNotFound();
    return;
}

const repositoriesResponse = await getRepositories(userName);

user.setInfo(userResponse);
user.setReposiTories(repositoriesResponse);
screen.renderUser(user);
getUserEvents(userName)
}
