// Declaração de variáveis
const element = document.querySelector(".fh5co-page");
const scrollY = window.scrollY;
const offset = 50;

// Função para iniciar a animação
function init() {
  // Define o evento de scroll
  window.addEventListener("scroll", scrollHandler);
}

// Função para atualizar a posição do elemento
function scrollHandler() {
  // Obtém a posição atual do scroll
  const newScrollY = window.scrollY;

  // Verifica se o scroll mudou
  if (newScrollY !== scrollY) {
    // Calcula a nova posição do elemento
    const newTop = newScrollY - offset;

    // Atualiza a posição do elemento
    element.style.top = newTop + "px";
  }

  // Atualiza a posição do scroll
  scrollY = newScrollY;
}

// Inicializa a animação
init();