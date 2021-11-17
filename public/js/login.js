login?.addEventListener("submit", async (event)=> {
  event.preventDefault();
  const response = await fetch('/login', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email: event.target.ИМЯМЕЙЛАХБС.value,
      password: event.target.ИМЯПАРОЛЯХБС.value,
    }),
  });
  const jsonResponse = await response.json();
  if (jsonResponse.users === true) {
    window.location.href = "/cards";
  } else {
    window.location.href = "/registration";
  }
})
