
document.addEventListener('DOMContentLoaded', () => {
  const vehicleContainer = document.getElementById('vehicle-container');
  const API_URL = 'https://jsonplaceholder.typicode.com/posts'

  async function fetchVehicles() {
    try {
      let vehicles = getByLocalStorage('vehicles');
  
      if (vehicles) {
        renderVehicles(vehicles);
      } else {
        const response = await fetch(API_URL);
        const data = await response.json();
  
        vehicles = [
          { id: 1, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata", tipo: "Sedan", quilometragem: "50.000 km", portas: 4, imagem: "assets/images/placeholder.jpg" },
          { id: 2, marca: "Honda", modelo: "Civic", ano: 2021, cor: "Preto", tipo: "Sedan", quilometragem: "40.000 km", portas: 4, imagem: "assets/images/placeholder.jpg" },
          { id: 3, marca: "Ford", modelo: "EcoSport", ano: 2019, cor: "Branco", tipo: "SUV", quilometragem: "70.000 km", portas: 4, imagem: "assets/images/placeholder.jpg" },
        ];
  
        getByLocalStorage('vehicles', vehicles);
      }
  
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
        <img src="${vehicle.imagem}" alt="Imagem do veículo ${vehicle.marca} ${vehicle.modelo}">
        <div class="vehicle-info">
          <h3>${vehicle.marca} ${vehicle.modelo}</h3>
          <p><strong>Ano:</strong> ${vehicle.ano}</p>
          <p><strong>Cor:</strong> ${vehicle.cor}</p>
          <p><strong>Tipo:</strong> ${vehicle.tipo}</p>
          <p><strong>Quilometragem:</strong> ${vehicle.quilometragem}</p>
          <p><strong>Portas:</strong> ${vehicle.portas}</p>
        </div>
      `;
      vehicleContainer.appendChild(card);
    });
  }

  fetchVehicles();
});

