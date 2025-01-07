function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getByLocalStorage(key) {
  const valorSalvo = localStorage.getItem(key);
  return valorSalvo ? JSON.parse(valorSalvo) : null;
}