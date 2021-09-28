export class MovieCover extends HTMLElement {
  constructor (url) {
    super()

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')

    const movieId = this.getAttribute('data-id')
    fetch(`http://localhost:8000/api/v1/titles/${movieId}`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status)
        }
        return response.json()
      })
      .then(function (json) {
        const image = document.createElement('img')
        image.src = json.image_url
        wrapper.appendChild(image)
      })

    shadow.appendChild(wrapper)
  }
}
