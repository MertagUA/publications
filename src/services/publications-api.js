import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export async function fetchPublications() {
  const { data } = await axios.get('/posts');
  return data;
}

export async function addPublication({ userId, title, body }) {
  const response = await axios.post('/posts/', { userId, title, body });
  return response.data;
}
