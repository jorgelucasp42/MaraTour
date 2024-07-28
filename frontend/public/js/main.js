document.addEventListener('DOMContentLoaded', () => {
    fetchDestinos();
  });
  
  async function fetchDestinos() {
    try {
      const response = await fetch('/api/destinos');
      const destinos = await response.json();
      displayDestinos(destinos);
    } catch (error) {
      console.error('Erro ao buscar destinos:', error);
    }
  }
  
  function displayDestinos(destinos) {
    const destinosContainer = document.getElementById('destinos-container');
    destinosContainer.innerHTML = '';
    destinos.forEach(destino => {
      const destinoElement = document.createElement('div');
      destinoElement.classList.add('destino');
      destinoElement.innerHTML = `
        <img src="${destino.imagem}" alt="${destino.nome}">
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
      `;
      destinosContainer.appendChild(destinoElement);
    });
  }
  