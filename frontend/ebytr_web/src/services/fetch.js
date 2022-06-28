const URL = 'http://localhost:3005/login';

export async function fetchRegister(name, email, password) {
  const token = await fetch(URL, {
    method: 'Post',
    body: JSON.stringify(
        name,
        email,
        password,
    )
  })
    .then((data) => {
        console.log(data, '<<<<< Fecth register')
    .catch((err) => console.log(err));
    });
  return token;
}

export async function fetchLogin() {}

export async function fetchSetMessage() {}

export async function fetchGetMessage() {}