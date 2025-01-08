function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getByLocalStorage(key) {
  const valorSalvo = localStorage.getItem(key);
  return valorSalvo ? JSON.parse(valorSalvo) : null;
}

async function initializeApp() {
  const API_URL = 'https://my-json-server.typicode.com/matheusvidal21/car-rental/vehicles';
  const INITIALIZED_KEY = 'app_initialized';

  if (!localStorage.getItem(INITIALIZED_KEY)) {
    try {
      const response = await fetch(API_URL);
      const apiVehicles = await response.json();

      saveToLocalStorage('vehicles', apiVehicles);

      localStorage.setItem(INITIALIZED_KEY, 'true');
      console.log('Dados da API salvos no localStorage.');
    } catch (error) {
      console.log("Erro ao buscar veículos da API: ", error);
    }
  } 
}