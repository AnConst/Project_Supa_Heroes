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




formRegistration?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch ('/registration', {
    method: 'POST', 
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ 
      login:event.target.login.value,
      email:event.target.login.email,
      password:event.target.login.password,  
    }),
  });
  const responseJson = await response.json();
});
