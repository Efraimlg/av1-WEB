// Inicializa o mapa
var map = L.map('map').setView([-12.9714, -38.5014], 13); // Salvador

// Adiciona o mapa base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Lista de barbearias
const barbearias = [
  {
    nome: "Barbearia Estilo - Centro",
    coords: [-12.9714, -38.5014],
    endereco: "Rua A, nº 1 - Centro"
  },
  {
    nome: "Barbearia Estilo - Pituba",
    coords: [-12.9999, -38.4687],
    endereco: "Av. das Estrelas, nº 22 - Pituba"
  }
];

// Cria marcadores no mapa
barbearias.forEach(barbearia => {
  const marker = L.marker(barbearia.coords).addTo(map);
  marker.bindPopup(`
    <strong>${barbearia.nome}</strong><br>
    ${barbearia.endereco}<br>
    <button onclick="alert('Você selecionou ${barbearia.nome} para agendamento')">Agendar</button>
  `);
});
