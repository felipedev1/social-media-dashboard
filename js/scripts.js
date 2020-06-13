const toggleButton = document.querySelector('.toggle-theme button')
const toggleIn = toggleButton.firstChild
let theme = document.getElementById("theme")

toggleButton.addEventListener('click', () => {
  if(theme.className === 'light') {
    theme.className = 'dark'
  } else {
    theme.className = 'light'
  }
})
