const receitas = [
  {
    nome: "Arroz de Couve-Flor",
    imagem: "./arroz.png",
    ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
    instrucoes:
      "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
  },
  {
    nome: "Bolo de Café",
    imagem: "./bolo.png",
    ingredientes: ["Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
    instrucoes:
      "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
  },
  {
    nome: "Coxinha de Brigadeiro",
    imagem: "./morango.png",
    ingredientes: [
      "Leite Condensado",
      "Chocolate em Pó",
      "Manteiga",
      "Morango",
      "Chocolate Granulado",
    ],
    instrucoes:
      "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado",
  },
];

function getListaIngredientes(receita) {
  return receita.ingredientes;
}

function getCard(receita) {
  const cardHTML = `
      <div class="grid__item">
        <div class="card">
          <img class="card__img" src="${receita.imagem}" alt="${
    receita.nome
  }" />
          <div class="card__content">
            <h4 class="card__header">${receita.nome}</h4>
            <ul class="card__text">
              ${receita.ingredientes
                .map((ingrediente) => `<li>${ingrediente}</li>`)
                .join("")}
            </ul>
            <hr />
            <p style="margin-top: 2.5rem" class="card__text">${
              receita.instrucoes
            }</p>
          </div>
        </div>
      </div>
    `;
  return cardHTML;
}

function preencheCatalogo() {
  const catalogo = document.querySelector(".grid");

  receitas.forEach((receita) => {
    const cardHTML = getCard(receita);
    catalogo.innerHTML += cardHTML;
  });
}
