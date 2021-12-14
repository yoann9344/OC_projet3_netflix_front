import html_component from './movie-image.html'
import styles from './movie-image.css'
import { html_to_element, css_to_element } from '../../utils/template.js'

export class MovieImage extends HTMLElement {
  constructor () {
    super()
    const html = html_to_element(html_component)
    this.image = html

    const style = `${styles}\nimg{${this.style.cssText}}`
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(css_to_element(style))
    this.shadow.appendChild(html)
  }

  async connectedCallback () {
    const image_src = this.getAttribute('data-src')
    // console.log('connected', image_src, this.info)
    // const index = this.getAttribute('data-index')
    // if (image_src) {
    //   this.image.src = image_src
    // } else {
    this.image.src = this.info.image_url
    // }
    this.image.addEventListener('click', (e) => this.open_details_modal(), false)
  }

  open_details_modal () {
    console.log('onclick')
    const modal = document.createElement('movie-details')
    modal.setAttribute('data-id', this.info.id)
    document.body.appendChild(modal)
  }
}
