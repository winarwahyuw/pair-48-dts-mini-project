import axios from 'axios';

const API_KEY = '5ec518cd0e3a58bbeb7141f9a3e8be78';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;