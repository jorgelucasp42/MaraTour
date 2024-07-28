let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
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
    const destinosContainer = document.getElementById('destinations-container');
    destinosContainer.innerHTML = '';
    destinos.forEach(destino => {
        const destinoElement = document.createElement('div');
        destinoElement.classList.add('grid-item');
        destinoElement.style.backgroundImage = `url(${destino.imagem})`;
        destinoElement.innerHTML = `
            <h3>${destino.nome}</h3>
            <p>${destino.descricao}</p>
        `;
        destinosContainer.appendChild(destinoElement);
    });
}

document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-bar').value;
    if (query) {
        try {
            const response = await fetch(`/api/destinos?search=${query}`);
            const destinos = await response.json();
            displayDestinos(destinos);
        } catch (error) {
            console.error('Erro ao buscar destinos:', error);
        }
    }
});
