const loaderContainer = document.querySelector('.loader-container');
const pageContent = document.querySelector('#page-content');

window.addEventListener('load', () => {
  setTimeout(() => {
    loaderContainer.classList.add('hidden');
  },4000)
  pageContent.classList.add('visible')
})

