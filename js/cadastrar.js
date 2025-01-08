document.addEventListener('DOMContentLoaded', async () => {
  await initializeApp();
  const form = document.getElementById('form-register');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const type = document.getElementById('type').value;
    const mileage = document.getElementById('mileage').value;
    const doors = document.getElementById('doors').value;
    const image = document.getElementById('image').value;

    if (!brand || !model || !year || !color || !type || !mileage || !doors || !image) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newVehicle = new Vehicle(brand, model, parseInt(year), color, type, parseInt(mileage), parseInt(doors), image);
    
    let vehicles = getByLocalStorage('vehicles') || [];
    vehicles.push(newVehicle);
    saveToLocalStorage('vehicles', vehicles);

    alert('Veículo cadastrado com sucesso!');
    form.reset();
  });
});