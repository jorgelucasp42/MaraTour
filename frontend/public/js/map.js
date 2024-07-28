document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-2.529755, -44.306786], 8); // Coordenadas centrais do Maranhão
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Exemplo de marcadores
    L.marker([-2.529755, -44.306786]).addTo(map)
      .bindPopup('São Luís: Patrimônio Histórico')
      .openPopup();
    
    L.marker([-2.720550, -42.837070]).addTo(map)
      .bindPopup('Lençóis Maranhenses')
      .openPopup();
  });
  