const api = async () => {
  const endpoint = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';
  const result = await fetch(endpoint);
  const data = await result.json();
  return data;
}

export default api;
