const svg = document.querySelector('svg')
const insvestmentsElements = Array.from(document.querySelectorAll('.investment'))
const librariesElements = Array.from(document.querySelectorAll('.library'))

const investmentButton = document.querySelector('.investment-button')

investmentButton.addEventListener('click', function () {
  insvestmentsElements.forEach(el => el.beginElement())
})

const libraryButton = document.querySelector('.library-button')

libraryButton.addEventListener('click', function () {
  librariesElements.forEach(el => el.beginElement())
})