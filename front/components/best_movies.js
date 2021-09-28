export class BestMovies extends HTMLElement {
  constructor (url) {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')
    this.wrapper = wrapper

    const genre = this.getAttribute('data-genre')
    const page = this.getAttribute('data-page')
    // url ex 'http://localhost:8000/api/v1/titles/?genre=action&page=2&sort_by=-imdb_score')
    fetch(`http://localhost:8000/api/v1/titles/?genre=${genre}&page=${page}&sort_by=-imdb_score`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status)
        }
        return response.json()
      })
      .then(function (json) {
        for (const movie of json.results) {
          const image = document.createElement('img')
          image.src = movie.image_url
          wrapper.appendChild(image)
          // 7 images
          // [5, 6, 7]
          // index = 0
          // genre-caroussel > 7 movie-images
        }
      })

    shadow.appendChild(wrapper)
  }
}
