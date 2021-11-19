// const smileBtn = document.querySelector('.smiler');
// console.log(smileBtn);
document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('smiler')) {
    // console.log('click');
    const response = await fetch('/newSmiler')
      .then(res => console.log(res));
      // window.location.href='/smiler';
  }
});
// smileBtn.addEventListener('click', async (event) => {
//   // event.preventDefault();
//   const response = await fetch('/smiler');
//   // const body = await response.json();
// });
