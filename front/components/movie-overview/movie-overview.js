import html_component from './movie-overview.html'
import styles from './movie-overview.css'
import { html_to_element, css_to_element } from '../../utils/template.js'

export class MovieOverview extends HTMLElement {
  constructor () {
    super()
    this.template = html_to_element(html_component)
    // this.image = html
    // console.log(html, image)

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(css_to_element(styles))
    // this.shadow.appendChild(html)
  }

  async connectedCallback () {
    this.show_modal()
  }

  show_modal () {
    // const target = event.explicitOriginalTarget
    const target = this.image
    const position = target.getBoundingClientRect()
    const clone = this.template.cloneNode(true)
    const image = clone.querySelector('movie-image')
    image.setAttribute('data-id', this.info.id)
    image.info = this.info

    // const index = target.getAttribute('data-index')
    // console.log(index, target, image)
    // const this.info = this.movies_info[index]
    clone.querySelector('.title').innerHTML = this.info.title
    clone.querySelector('.imdb_score').innerHTML = this.info.imdb_score
    clone.querySelector('.directors').innerHTML = this.info.directors
    image.setAttribute('data-src', target.src)
    // console.log(position)
    const style = `position: absolute; width: ${target.width}px; top: ${position.top + window.scrollY}px; left: ${position.left + window.scrollX}px; transition: all 0.8s ease-in-out;`
    image.setAttribute('style', `width: ${target.width}px;border-top-left-radius: 10px;border-top-right-radius: 10px;`)
    clone.setAttribute('style', style)
    this.modal = clone
    clone.addEventListener('mouseenter', (e) => this.enter_modal(e), false)
    clone.addEventListener('mouseleave', (e) => this.hide_modal(e), false)
    this.shadow.appendChild(clone)
    window.setTimeout(() => this.check_modal(), 333)
  }

  check_modal () {
    if (!this.modal.classList.contains('focus')) {
      this.hide_modal({})
    }
  }

  enter_modal (event) {
    this.modal.classList.add('focus')
  }

  hide_modal (event) {
    try {
      this.parentNode.removeChild(this)
    } catch {
      const modals = this.shadow.querySelectorAll('.modal-movie')
      modals.forEach((modal) => modal.parentNode.removeChild(modal))
    }
  }
}
