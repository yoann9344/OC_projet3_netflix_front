import html_component from './movie-details.html'
import styles from './movie-details.css'
import { html_to_element, css_to_element } from '../../utils/template.js'

export class MovieDetails extends HTMLElement {
  constructor () {
    super()
    const html = html_to_element(html_component)
    this.modal = html

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(css_to_element(styles))
    document.body.setAttribute('style', 'overflow: hidden;')
    this.shadow.appendChild(html)
  }

  async connectedCallback () {
    const movie_id = this.getAttribute('data-id')
    this.info = await this.retrieve_info(movie_id)
    console.log(this.info)

    const inner_elements = this.modal.querySelectorAll('span.info-value, p.info-value, div.info-value')
    inner_elements.forEach((element) => {
      const key = element.getAttribute('id')
      const value = this.info[key]
      element.innerHTML = value
    })
    const image = this.shadow.getElementById('image_url')
    image.src = this.info.image_url
    this.shadow.getElementById('close_modal').addEventListener('click', (e) => this.hide_modal(e), false)
    const modal = this.shadow.getElementById('modal')
    if (image.y < 0) {
      const margin = modal.getBoundingClientRect().top - image.getBoundingClientRect().top + image.height + 10
      image.style = `margin-top: ${margin}px;`
    }
  }

  hide_modal (event) {
    document.body.removeAttribute('style')
    try {
      this.parentNode.removeChild(this)
    } catch {
      const modal = this.shadow.getElementById('#modal')
      modal.parentNode.removeChild(modal)
    }
  }

  async retrieve_info (movie_id) {
    const response = await fetch(`http://localhost:8000/api/v1/titles/${movie_id}`)
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status)
    }
    return await response.json()
  }
}
