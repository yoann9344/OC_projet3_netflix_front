const btnLeft = document.getElementById('moveLeft')
const btnRight = document.getElementById('moveRight')
const indicators = document.querySelectorAll('.indicator')

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

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });
