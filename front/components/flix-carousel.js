import html_component from './flix-carousel.html'
import styles from './flix-carousel.css'
import { html_to_element, css_to_element } from '../utils/template.js'

export class FlixCarousel extends HTMLElement {
  connectedCallback () {
    this.genre = this.getAttribute('data-genre')
    const nb_movies = this.getAttribute('data-nb-movies')

    const html = html_to_element(html_component)
    this.init_template(html)
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(css_to_element(styles))
    this.shadow.appendChild(html)
    this.slider = this.shadow.getElementById('slider')
    this.button_left = this.shadow.getElementById('button-left')
    this.button_right = this.shadow.getElementById('button-right')
    this.indicators = [...this.shadow.getElementById('indicators').children]

    console.log(this.indicators)
    this.index = 0

    this.button_left.addEventListener('click', (e) => this.move_to_left(e), false)
    this.button_right.addEventListener('click', (e) => this.move_to_right(e), false)
    this.movies = [
      './img/loading.gif',
      './img/loading.gif',
      './img/loading.gif',
      './img/loading.gif'
    ]
    this.create_images()

    this.retrieve_movies().then((movies) => {
      this.movies_info = movies
      this.movies = movies.map((m) => m.image_url).slice(0, nb_movies)
      this.nb_pages = Math.floor(this.movies.length / 4)
      this.slider.replaceChildren()
      this.create_images()
    })
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
    return await response.json()
  }

  async retrieve_movies () {
    const json_1 = await this.retrieve_page(1)
    const json_2 = await this.retrieve_page(2)
    const result = json_1.results.concat(json_2.results)
    console.log(json_1, json_2, 'result :', result)
    console.log(result[0])
    return result
  }

  show_modal (event) {
    const target = event.explicitOriginalTarget
    console.log('event modal', event, target)
    const position = target.getBoundingClientRect()
    const clone = this.template.cloneNode(true)
    const image = clone.querySelector('img')
    const index = target.getAttribute('data-index')
    const movie_info = this.movies_info[index]
    clone.querySelector('.title').innerHTML = movie_info.title
    clone.querySelector('.imdb_score').innerHTML = `note : ${movie_info.imdb_score}`
    image.src = target.src
    console.log(position)
    const style = `position: absolute; width: ${target.width}px; top: ${position.top + window.scrollY}px; left: ${position.left + window.scrollX}px; transition: all 0.8s ease-in-out;`// transform-origin: center center 0px; transform: none; z-index: 3; opacity: 1; box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;`
    image.setAttribute('style', `width: ${target.width}px;`)
    clone.setAttribute('style', style)
    this.modal = clone
    clone.addEventListener('mouseenter', (e) => this.enter_modal(e), false)
    clone.addEventListener('mouseleave', (e) => this.hide_modal(e), false)
    clone.addEventListener('mouseleave', (e) => this.hide_modal(e), false)
    this.shadow.appendChild(clone)
    window.setTimeout(() => this.check_modal(), 333)
  }

  check_modal () {
    if (!this.modal.classList.contains('focus')) {
      console.log('event check modal', this.modal.classList)
      this.hide_modal({})
    }
  }

  enter_modal (event) {
    console.log('event enter modal', event)
    this.modal.classList.add('focus')
  }

  hide_modal (event) {
    console.log('event remove modal', event)
    try {
      this.modal.parentNode.removeChild(this.modal)
    } catch {
      const modals = this.shadow.querySelectorAll('.modal-movie')
      modals.forEach((modal) => modal.parentNode.removeChild(modal))
    }
  }

  init_template (html) {
    const nodes = this.children
    console.log(html)
    if (nodes.length > 1) {
      throw Error('FlixCarousel can have only one sub element.')
    } else if (nodes.length == 1) {
      this.template = nodes[0]
      console.log('Nodes Z')
    } else {
      this.template = html.getElementsByTagName('template')[0].content.firstElementChild
      console.log('Template', this.template)
    }
  }

  create_images () {
    this.images = []
    this.movies.forEach((image_src, index) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
      // const clone = this.template.cloneNode(true)
      // const image = clone.querySelector('img')
      const image = document.createElement('img')
      image.setAttribute('data-index', index)
      if (!image) {
        throw Error('FliwCarousel : Template must contain a tag img.')
      }
      image.src = image_src
      image.setAttribute('class', 'movie')
      image.addEventListener('mouseenter', (e) => this.enter_image(e), false)
      image.addEventListener('mouseleave', (e) => this.leave_image(e), false)
      this.images.push(image)

      const slider = this.slider
      slider.insertBefore(image, slider.childNodes[slider.childNodes.length - 1])
      // slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1])
    })
  }

  enter_image (event) {
    this.open_modal_timeout = window.setTimeout(() => this.show_modal(event), 2000)
  }

  leave_image (event) {
    try {
      clearTimeout(this.open_modal_timeout)
    } catch {}
  }

  // Update the indicators that show which page we're currently on
  update_indicators () {
    this.indicators.forEach((indicator) => {
      indicator.classList.remove('active')
    })
    const newActiveIndicator = this.indicators[this.index]
    console.log(this.indicators)
    console.log(newActiveIndicator)
    newActiveIndicator.classList.add('active')
  }

  move_to_left (e) {
    const movie_width = this.shadow.querySelector('.movie').getBoundingClientRect().width
    const scroll_distance = movie_width * 4 // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

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
    // console.log('this', this)
    const movie_width = this.shadow.querySelector('.movie').getBoundingClientRect().width
    const scroll_distance = movie_width * 4 // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    // console.log(`movie_width = ${movie_width}`)
    // console.log(`scrolling right ${scroll_distance}`)

    if (this.index == this.nb_pages) {
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
