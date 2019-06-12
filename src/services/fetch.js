import axios from 'axios';


export async function get(url, options = {}) {
  return axios.get(url, options);
}

export async function post(url, data, options = {}) {
  return axios.post(url, data, options);
}
