const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
    this.userProfile.innerHTML = `
        <div class="info">
        <img src="${user.avatarUrl ?? 'não possui foto cadastrada😅'}" alt="foto do perfil do usuário" />
        <div class="data">
            <h1>${user.name ?? 'não possui nome cadastrado😅'}</h1>
            <p>${user.bio ?? 'não possui bio cadastrada 😅'}</p>
            <h3> 💖seguidores ${user.followers}</h3>
            <h3> 👥seguindo ${user.following}</h3>
        </div>
        </div>`;

    let repositoriesItems = '';
user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a><p class="repo-info">🍴${repo.forks_count} 🌟${repo.stargazers_count} 👀${repo.watchers_count} 🧑‍🏫${repo.language}</p></li>`);



    if (user.repositories.length > 0) {
        this.userProfile.innerHTML += `
        <div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItems}</ul>
        </div>`;
    }
    },
    renderUserNotFound() {
    this.userProfile.innerHTML = "<h3>usuário não encontrado</h3>";
    }
};

export { screen };
