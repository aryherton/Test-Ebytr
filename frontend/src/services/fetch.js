import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;

// export async function fetchRegister(name, email, password) {
//   const token = await fetch(URL, {
//     method: 'Post',
//     body: JSON.stringify(
//         name,
//         email,
//         password,
//     )
//   })
//     .then((data) => {
//         console.log(data, '<<<<< Fecth register')
//     .catch((err) => console.log(err));
//     });
//   return token;
// }

// export async function fetchLogin() {}

// export async function fetchSetMessage() {}

// export async function fetchGetMessage() {}