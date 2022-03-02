const button = document.querySelector('button')
const special = document.querySelector('.special')
button.addEventListener('click', () => {
  special.scrollIntoView({ behavior: 'smooth', block: 'center' })
})
