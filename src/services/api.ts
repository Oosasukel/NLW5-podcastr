import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://podcastr-fake-server.herokuapp.com',
});
