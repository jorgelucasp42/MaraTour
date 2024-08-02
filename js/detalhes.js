document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const destino = params.get('destino');

    fetch(`/api/destinos/${destino}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('destino-nome').innerText = data.nome;
            document.getElementById('destino-descricao').innerText = data.descricao;
            loadMap(data.localizacao.latitude, data.localizacao.longitude);
        })
        .catch(error => console.error('Erro ao buscar detalhes do destino:', error));
});

function loadMap(latitude, longitude) {
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Localização do destino')
        .openPopup();
}
