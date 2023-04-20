function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocal(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
export { setLocal, getLocal };
