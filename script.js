const jokEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", generateJoke);

//richiesta API con await/ async
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  jokEl.innerHTML = data.joke;
}

//richiesta API con then()
// function generateJoke() {
//   const config = {
//     headers: {
//       accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokEl.innerHTML = data.joke;
//     });
// }
