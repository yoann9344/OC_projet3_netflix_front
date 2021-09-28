const slider = document.querySelector('.slider')
const btnLeft = document.getElementById('moveLeft')
const btnRight = document.getElementById('moveRight')
const indicators = document.querySelectorAll('.indicator')

const baseSliderWidth = slider.offsetWidth
let activeIndex = 0 // the current page on the slider

const movies = [
  {
    src:
      'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

// Fill the slider with all the movies in the "movies" array
function populateSlider () {
  movies.forEach((image) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
    const newMovie = document.getElementById('movie0')
    const clone = newMovie.cloneNode(true)
    const img = clone.querySelector('img')
    img.src = image.src

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1])
  })
}

populateSlider()
populateSlider()

// delete the initial movie in the html
const initialMovie = document.getElementById('movie0')
initialMovie.remove()

// Update the indicators that show which page we're currently on
function updateIndicators (index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove('active')
  })
  const newActiveIndicator = indicators[index]
  newActiveIndicator.classList.add('active')
}

// Scroll Left button
btnLeft.addEventListener('click', (e) => {
  const movieWidth = document.querySelector('.movie').getBoundingClientRect()
    .width
  const scrollDistance = movieWidth * 6 // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: 'smooth'
  })
  activeIndex = (activeIndex - 1) % 3
  console.log(activeIndex)
  updateIndicators(activeIndex)
})

// Scroll Right button
btnRight.addEventListener('click', (e) => {
  const movieWidth = document.querySelector('.movie').getBoundingClientRect()
    .width
  const scrollDistance = movieWidth * 6 // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  console.log(`movieWidth = ${movieWidth}`)
  console.log(`scrolling right ${scrollDistance}`)

  // if we're on the last page
  if (activeIndex == 2) {
    // duplicate all the items in the slider (this is how we make 'looping' slider)
    populateSlider()
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: 'smooth'
    })
    activeIndex = 0
    updateIndicators(activeIndex)
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: 'smooth'
    })
    activeIndex = (activeIndex + 1) % 3
    console.log(activeIndex)
    updateIndicators(activeIndex)
  }
})

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });
