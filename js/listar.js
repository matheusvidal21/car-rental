document.addEventListener('DOMContentLoaded', async () => {
  await initializeApp();
  const vehicleContainer = document.getElementById('vehicle-container');

  const vehicles = getByLocalStorage('vehicles') || [];
  renderVehicles(vehicles);

  function renderVehicles(vehicles) {
    vehicleContainer.innerHTML = '';
  
    vehicles.forEach(vehicle => {
      const card = document.createElement('div');
      card.classList.add('vehicle-card');
      card.innerHTML = `
        <img src="${vehicle.image}" alt="Imagem do veículo ${vehicle.brand} ${vehicle.model}">
        <div class="vehicle-info">
          <h3>${vehicle.brand} ${vehicle.model}</h3>
          <p><strong>Ano de Fabricação:</strong> ${vehicle.year}</p>
          <p><strong>Tipo:</strong> ${vehicle.type}</p>
          <p><strong>Cor:</strong> ${vehicle.color}</p>
          <p><strong>Número de Portas:</strong> ${vehicle.doors}</p>
          <p><strong>Quilometragem:</strong> ${vehicle.mileage}km</p>
        </div>
      `;
      vehicleContainer.appendChild(card);
    });
  }
});