import { IMDB_TOKEN } from 'react-native-dotenv'

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${IMDB_TOKEN}`,
  },
})

export default api
