import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_API_PORT || '3005'}`,
});

export const requestPost = (endpoint, body) => {
  // api.defaults.headers.common.Authorization = token;
  const { data } = api.post(endpoint, body);
  return data;
};

// export const requestLogin = async (endpoint, body) => {
//   const { data } = await api.post(endpoint, body);
//   return data;
// };

export const getArrMessages = async (endpoint, token) => {
  api.defaults.headers.Authorization = token;
  const data = await api.get(endpoint)
    .then((resp) => resp.data);
    // console.log(data, 'ssssssssssssss');
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