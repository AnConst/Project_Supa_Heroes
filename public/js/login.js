const login = document.querySelector('#logForm');
login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: event.target.login.value,
      password: event.target.password.value,
    }),
  });
  const jsonResponse = await response.json();
  // console.log(jsonResponse)
  if (jsonResponse.login) {
    window.location.href = '/cards';
    // alert('ura!');
  } else {
    window.location.href = 'http://localhost:3000/login';
    alert('Введенные данные не верны! Повторите попытку или зарегистрируйтесь');
  }
});
