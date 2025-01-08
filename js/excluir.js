document.addEventListener('DOMContentLoaded', async () => {
  await initializeApp();
  const vehicleList = document.getElementById('vehicle-container');

  const vehicles = getByLocalStorage('vehicles') || [];
  renderVehicles(vehicles);

  function renderVehicles(vehicles) {
    if (!vehicles) {
      alert('Sem veículos para excluir.');
    }

    vehicleList.innerHTML = '';
    vehicles.forEach((vehicle, index) => {
        const card = document.createElement('div');
        card.classList.add('vehicle-card');
        card.innerHTML = `
          <img src="${vehicle.image}" alt="Imagem do veículo ${vehicle.brand} ${vehicle.model}">
          <div class="vehicle-info">
            <div id="vehicle-info-header">
              <h3>${vehicle.brand} ${vehicle.model}</h3>
              <button class="delete-button" data-index="${index}">
                <img src="assets/images/icon-excluir.svg" alt="Excluir veículo ${vehicle.brand} ${vehicle.model}">
              </button>
            </div>
            <p><strong>Ano de Fabricação:</strong> ${vehicle.year}</p>
            <p><strong>Tipo:</strong> ${vehicle.type}</p>
            <p><strong>Cor:</strong> ${vehicle.color}</p>
            <p><strong>Número de Portas:</strong> ${vehicle.doors}</p>
            <p><strong>Quilometragem:</strong> ${vehicle.mileage}km</p>
          </div>
        `;
        vehicleList.appendChild(card);
      });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        deleteVehicle(index);
      });
    });
  }

  function deleteVehicle(index) {
    const vehicles = getByLocalStorage('vehicles');
    vehicles.splice(index, 1);
    saveToLocalStorage('vehicles', vehicles);
    renderVehicles(vehicles);
  }
});