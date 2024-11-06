const button = document.querySelector('button')

const popup = document.querySelector('.popup-wrapper')


button.addEventListener('click', () => {
    popup.style.display = 'block'

})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const shoudClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if (shoudClosePopup) {
        console.log(classNameOfClickedElement)

        popup.style.display = 'none'
    }
  
})




