import { FlixCarousel } from './components/carousel/flix-carousel.js'
import { MovieImage } from './components/movie-image/movie-image.js'
import { MovieOverview } from './components/movie-overview/movie-overview.js'
import { MovieDetails } from './components/movie-details/movie-details.js'

// Define elements
customElements.define('flix-carousel', FlixCarousel)
customElements.define('movie-image', MovieImage)
customElements.define('movie-overview', MovieOverview)
customElements.define('movie-details', MovieDetails)

// stop/start video when video quit the screen
const video = document.querySelector('video')

const best_video_observer = new IntersectionObserver((observables) => {
  observables.forEach(entry => {
    console.log(entry)
    if (entry.intersectionRatio < 0.5) {
      entry.target.pause()
    } else {
      entry.target.play()
    }
  })
}, { threshold: 0.5 })
best_video_observer.observe(video)

// Store the scrolling position to use it in CSS (used to toggle the header)
const debounce = (fn) => {
  let frame
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true })
storeScroll()
