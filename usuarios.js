function getUsers() {
  fetch("https://reqres.in/api/users/")
    .then((response) => response.json())
    .then((data) => {
      const userList = document.getElementById("userList");
      const users = data.data.slice(0, 3);

      let userListHTML = "";

      users.forEach((user) => {
        const userId = user.id;
        const email = user.email;
        const fullName = user.first_name + " " + user.last_name;
        const avatar = user.avatar;

        const userHTML = `
            <div class="grid__item" style="margin: 10px;>
              <div class="card" style="padding: 10px;">
                <img class="card__img" src="${avatar}" alt="${avatar}" />
                <div class="card__content">
                  <h4 class="card__header">${fullName}</h4>
                  <p class="card__text">${email}</p>
                </div>
              </div>
            </div>
          `;

        userListHTML += userHTML;
      });

      userList.innerHTML = userListHTML;
    })
    .catch((error) => console.error("Erro ao obter dados da API:", error));
}
