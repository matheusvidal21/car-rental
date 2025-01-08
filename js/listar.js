
document.addEventListener('DOMContentLoaded', () => {
  const vehicleContainer = document.getElementById('vehicle-container');
  const API_URL = 'https://my-json-server.typicode.com/matheusvidal21/fakeapi-cars/vehicles'

  async function fetchVehicles() {
    try {
      const response = await fetch(API_URL);
      vehicles = await response.json();
      saveToLocalStorage('vehicles', vehicles);

  
      renderVehicles(vehicles);
    } catch (error) {
      console.log("Erro ao buscar veículos: ", error);
    }
  }
  
  function renderVehicles(vehicles) {
    vehicleContainer.innerHTML = '';
  
    vehicles.forEach(vehicle => {
      const card = document.createElement('div');
      card.classList.add('vehicle-card');
      card.innerHTML = `
        <img src="${vehicle.image}" alt="Imagem do veículo ${vehicle.brand} ${vehicle.model}">
        <div class="vehicle-info">
          <h3>${vehicle.brand} ${vehicle.model}</h3>
          <p><strong>Ano:</strong> ${vehicle.year}</p>
          <p><strong>Tipo:</strong> ${vehicle.type}</p>
          <p><strong>Quilometragem:</strong> ${vehicle.mileage}km</p>
        </div>
      `;
      vehicleContainer.appendChild(card);
    });
  }

  fetchVehicles();
});

