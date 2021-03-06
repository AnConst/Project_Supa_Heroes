const deleteCards = document.querySelectorAll('.deleteCard');
console.log(deleteCards);

// const nameH1 = document.querySelector('.nameH1');
deleteCards.forEach((el) => el.addEventListener('click', async (event) => {
  console.log(event);
  const nameDelete = event.path[1].children[1].textContent;
  let jsonResponse;
  try {
    const response = await fetch('/deleteCard', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameDelete,
      }),
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  console.log(jsonResponse.deleted);
  // Сделать проверку при неудачной регистрации
  if (jsonResponse.deleted) {
    alert('Герой удалён!');
    window.location.href = '/team';
  }
}));
// deleteCards.addEventListener('click', async (event) => {
//   console.log(event);
//   const nameDelete = event.path[1].children[1].textContent;
//   let jsonResponse;
//   try {
//     const response = await fetch('/deleteCard', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nameDelete,
//       }),
//     });
//     jsonResponse = await response.json();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(jsonResponse.deleted);
//   // Сделать проверку при неудачной регистрации
//   if (jsonResponse.deleted) {
//     alert('Герой удалён!');
//     window.location.href = '/team';
//   }
// });

// deleteCards.addEventListener('click', async (event) => {
//   console.log(event);
//   const nameDelete = event.path[1].children[1].textContent;
//   let jsonResponse;
//   try {
//     const response = await fetch('/deleteCard', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nameDelete,
//       }),
//     });
//     jsonResponse = await response.json();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(jsonResponse.deleted);
//   // Сделать проверку при неудачной регистрации
//   if (jsonResponse.deleted) {
//     alert('Герой удалён!');
//     window.location.href = '/team';
//   }
// });
