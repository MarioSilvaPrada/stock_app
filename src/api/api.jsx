import axios from 'axios';

export default axios.create({
  baseURL: 'https://cloud.iexapis.com/',
  params: {
    publishable: process.env.REACT_APP_API_KEY,
  },
});