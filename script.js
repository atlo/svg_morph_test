const svg = document.querySelector('svg')
const animateElements = Array.from(document.querySelectorAll('animate'))

svg.addEventListener('click', function () {
  animateElements.forEach(el => el.beginElement())
})