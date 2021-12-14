import html_component from './flix-carousel.html'
import styles from './flix-carousel.css'
import { html_to_element, css_to_element } from '../../utils/template.js'
const LOADING_GIF = './img/loading.gif'

export class FlixCarousel extends HTMLElement {
  async connectedCallback () {
    this.genre = this.getAttribute('data-genre')
    const nb_movies = this.getAttribute('data-nb-movies')
    let offset = this.getAttribute('data-offset')
    if (!offset) {
      offset = 0
    }

    const html = html_to_element(html_component)
    this.init_template(html)
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(css_to_element(styles))
    this.shadow.appendChild(html)
    this.slider = this.shadow.getElementById('slider')
    this.button_left = this.shadow.getElementById('button-left')
    this.button_right = this.shadow.getElementById('button-right')
    this.indicators = [...this.shadow.getElementById('indicators').children]

    this.index = 0
    this.movies = []
    this.movies_info = []

    this.button_left.addEventListener('click', (e) => this.move_to_left(e), false)
    this.button_right.addEventListener('click', (e) => this.move_to_right(e), false)
    const gifs = [
      { image_url: LOADING_GIF },
      { image_url: LOADING_GIF },
      { image_url: LOADING_GIF },
      { image_url: LOADING_GIF }
    ]
    this.create_images(gifs)

    this.nb_pages = 1
    // load page by page, to replace the gifs as fast as possible
    let missing_movies = nb_movies - this.movies.length
    while (missing_movies > 0) {
      const movies = await this.retrieve_page(this.nb_pages)
      this.movies_info.push(...movies)
      let movie_to_add
      if (this.nb_pages == 1) {
        movie_to_add = movies.slice(offset, nb_movies + offset)
        this.slider.replaceChildren() // replace loading gifs when first page loaded
      } else {
        movie_to_add = movies.slice(0, missing_movies)
      }
      this.create_images(movie_to_add)
      this.movies.push(...movie_to_add)
      this.nb_pages += 1
      missing_movies = nb_movies - this.movies.length
    }
    this.nb_slides = Math.floor(this.movies.length / 4)
  }

  async retrieve_page (page) {
    let response = null
    if (this.genre) {
      response = await fetch(`http://localhost:8000/api/v1/titles/?genre=${this.genre}&page=${page}&sort_by=-imdb_score`)
    } else {
      response = await fetch(`http://localhost:8000/api/v1/titles/?page=${page}&sort_by=-imdb_score`)
    }
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status)
    }
    return (await response.json()).results
  }

  init_template (html) {
    const nodes = this.children
    // console.log(html)
    if (nodes.length > 1) {
      throw Error('FlixCarousel can have only one sub element.')
    } else if (nodes.length == 1) {
      this.template = nodes[0]
      // console.log('Nodes Z')
    } else {
      this.template = html.getElementsByTagName('template')[0].content.firstElementChild
      // console.log('Template', this.template)
    }
  }

  create_images (movies) {
    this.images = []
    const start_index = this.movies.length
    movies.forEach((movie, index) => {
      const image = this.template.cloneNode(true)
      image.setAttribute('data-index', start_index + index)
      image.info = movie
      if (!image) {
        throw Error('FliwCarousel : Template must contain a tag img.')
      }
      this.images.push(image)

      if (movie.image_url != LOADING_GIF) {
        image.addEventListener('mouseenter', (e) => this.enter_image(image, movie), false)
        image.addEventListener('mouseleave', (e) => this.leave_image(e), false)
      }
      this.slider.appendChild(image)
    })
  }

  enter_image (image, info) {
    this.open_modal_timeout = window.setTimeout(() => {
      const overview = document.createElement('movie-overview')
      console.log('ENTER', image, image.info)
      overview.image = image.image
      overview.info = image.info
      console.log('ENTER INFO set')
      console.log(image.info, image)
      document.body.appendChild(overview)
    }, 1000)
  }

  leave_image (event) {
    try {
      clearTimeout(this.open_modal_timeout)
    } catch {}
  }

  update_indicators () {
    this.indicators.forEach((indicator) => {
      indicator.classList.remove('active')
    })
    const newActiveIndicator = this.indicators[this.index]
    // console.log(this.indicators)
    // console.log(newActiveIndicator)
    newActiveIndicator.classList.add('active')
  }

  move_to_left (e) {
    const movie_width = this.shadow.querySelector('.movie').getBoundingClientRect().width
    const scroll_distance = movie_width * 4

    if (this.index > 0) {
      this.slider.scrollBy({
        top: 0,
        left: -scroll_distance,
        behavior: 'smooth'
      })
      this.index = (this.index - 1) % 3
    }
    this.update_indicators()
  }

  move_to_right (e) {
    const movie_width = this.shadow.querySelector('.movie').getBoundingClientRect().width
    const scroll_distance = movie_width * 4

    if (this.index == this.nb_slides) {
      this.slider.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.index = 0
    } else {
      this.slider.scrollBy({
        top: 0,
        left: +scroll_distance,
        behavior: 'smooth'
      })
      this.index = (this.index + 1) % 3
    }
    this.update_indicators()
  }
}
