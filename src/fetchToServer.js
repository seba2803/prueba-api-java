async function fetchToServer() {
  const data = await fetch(
    'https://pruebaapi-muif.onrender.com/api/usuarios/getAll'
  );
  const dataJson = await data.json();
  return dataJson;
}

export default fetchToServer;
