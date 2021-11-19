// const { post } =  require('../../routes');

// const regForm = document.querySelector('.formRegistration');

// regForm.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const regLogin = regForm.login;
//   const regEmail = regForm.email;
//   const regPassword = regForm.password;
//   const response = await fetch ('/registration', {
//     method: 'POST', 
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({ login:regLogin.value, email: regEmail.value, password: regPassword.value })
//   });
//   const responseJson = await response.json();
// });

// const { post } =  require('../../routes');

const formReg = document.querySelector('#formReg');
formReg?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: event.target.login.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }),
  });
  const responseJson = await response.json();
  console.log(responseJson);
  if (responseJson.isRegistered) {
    window.location.href = 'http://localhost:3000/login';
  }
});
