const svg = document.querySelector('svg')
const investmentsElements = Array.from(document.querySelectorAll('.investment'))
const librariesElements = Array.from(document.querySelectorAll('.library'))
const accidentsElements = Array.from(document.querySelectorAll('.accident'))
const forestsElements = Array.from(document.querySelectorAll('.forest'))
const industrialElements = Array.from(document.querySelectorAll('.industrial'))
const incomeElements = Array.from(document.querySelectorAll('.income'))
const cinemaElements = Array.from(document.querySelectorAll('.cinema'))
const unemploymentElements = Array.from(document.querySelectorAll('.unemployment'))
const populationElements = Array.from(document.querySelectorAll('.population'))
const turismElements = Array.from(document.querySelectorAll('.turism'))
const potatoElements = Array.from(document.querySelectorAll('.potato'))
const territoryElements = Array.from(document.querySelectorAll('.territory'))

const accidentButton = document.querySelector('.accident-button')
const populationButton = document.querySelector('.population-button')
const investmentButton = document.querySelector('.investment-button')
const unemploymentButton = document.querySelector('.unemployment-button')
const incomeButton = document.querySelector('.income-button')
const forestButton = document.querySelector('.forest-button')
const grainButton = document.querySelector('.grain-button')
const chickenButton = document.querySelector('.chicken-button')
const libraryButton = document.querySelector('.library-button')
const cinemaButton = document.querySelector('.cinema-button')
const industrialButton = document.querySelector('.industrial-button')
const turismButton = document.querySelector('.turism-button')
const potatoButton = document.querySelector('.potato-button')
const territoryButton = document.querySelector('.territory-button')

investmentButton.addEventListener('click', function () {
  investmentsElements.forEach(el => el.beginElement())
})

libraryButton.addEventListener('click', function () {
  librariesElements.forEach(el => el.beginElement())
})

accidentButton.addEventListener('click', function () {
  accidentsElements.forEach(el => el.beginElement())
})

forestButton.addEventListener('click', function () {
  forestsElements.forEach(el => el.beginElement())
})

industrialButton.addEventListener('click', function () {
  industrialElements.forEach(el => el.beginElement())
})

incomeButton.addEventListener('click', function () {
  incomeElements.forEach(el => el.beginElement())
})

cinemaButton.addEventListener('click', function () {
  cinemaElements.forEach(el => el.beginElement())
})

unemploymentButton.addEventListener('click', function () {
  unemploymentElements.forEach(el => el.beginElement())
})

populationButton.addEventListener('click', function () {
  populationElements.forEach(el => el.beginElement())
})

turismButton.addEventListener('click', function () {
  turismElements.forEach(el => el.beginElement())
})

potatoButton.addEventListener('click', function () {
  potatoElements.forEach(el => el.beginElement())
})

territoryButton.addEventListener('click', function () {
  territoryElements.forEach(el => el.beginElement())
})