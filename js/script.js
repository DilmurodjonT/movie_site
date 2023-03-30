const moviesEl = document.querySelector(".movies");

axios("https://kinobd.ru/api/films").then((response) => {
  console.log(response.data);
  response.data.data.forEach((movie) => {
    const movieEL = document.createElement("div");
    movieEL.classList.add("movie");
    movieEL.innerHTML = `
          <div class="movie__cover-inner">
                <img
                  src="${movie.big_poster}"
                  class="movier_cover"
                  alt="${movie.name_russian}"
                />
                <div class="movie__cover--darkened"></div>
              </div>
              <div class="movie__info">
                <div class="movie__title">${movie.name_original}</div>
                <div class="movie__category">${movie.genres[0].name_ru}</div>
                <div class="movi__average movi__average--green">9</div>
              </div>
          `;
    moviesEl.appendChild(movieEL);
  });
});
