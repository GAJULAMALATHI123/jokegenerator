const jokeEl = document.getElementById('joke');
        const get_joke = document.getElementById('get_joke');

        get_joke.addEventListener('click', generateJoke);

        async function generateJoke() {
          const jokeRes = await fetch('https://icanhazdadjoke.com/', {
            headers: {
              accept: 'application/json'
            }
          });

          const joke = await jokeRes.json();
          console.log(joke);
          jokeEl.innerHTML = joke.joke;
        }