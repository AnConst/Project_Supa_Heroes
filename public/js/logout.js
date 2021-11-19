const bye = document.querySelector('#bye');
bye.addEventListener('click', async (event) => {
  event.preventDefault();
  let jsonResponse;
  try {
    const response = await fetch('/logout', {
      method: 'POST',
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  console.log(jsonResponse.message);
  // Сделать проверку при неудачной регистрации
  if (jsonResponse.message) {
    alert('Успешный выход!');
    window.location.href = '/';
  }
});
