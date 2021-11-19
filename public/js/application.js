const hero = document.querySelector('.hero');
// const nameH = document.querySelector('.nameH');
hero.addEventListener('click', async (event) => {
  console.log(event);
  const nameH = event.path[1].children[1].textContent;
  let jsonResponse;
  try {
    const response = await fetch('/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameH,
      }),
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  console.log(jsonResponse.added);
  // Сделать проверку при неудачной регистрации
  if (jsonResponse.added) {
    alert('Герой добавлен!');
    // window.location.href = '/login';
  }
});

// const hero1 = document.querySelector('.hero1');
// // const nameH1 = document.querySelector('.nameH1');
// hero1.addEventListener('click', async (event) => {
//   console.log(event);
//   const nameH1 = event.path[1].children[1].textContent;
//   let jsonResponse;
//   try {
//     const response = await fetch('/cards1', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nameH1,
//       }),
//     });
//     jsonResponse = await response.json();
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(jsonResponse.added);
//   // Сделать проверку при неудачной регистрации
//   if (jsonResponse.added) {
//     alert('Герой добавлен!');
//     // window.location.href = '/login';
//   }
// });

// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('hero')) {
//     console.log(event);
//   }
// });
