
let showAndHideData = document.querySelector('.hamburger-icon')
let navList = document.querySelector('.nav-bar')

const triggerButtonShowAndHide = ()=> {
    navList.classList.toggle('show')
    navList.classList.toggle('hide')
    
}


showAndHideData.addEventListener('click', triggerButtonShowAndHide);
