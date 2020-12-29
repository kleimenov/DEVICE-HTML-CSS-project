
let bullets = document.querySelectorAll('.slider-nav-bullet');





for (let index in checkedBullet) {
    index.addEventListener('click', (evt) => {
        evt.preventDefault();
        if(!index.classList.contains('slider-nav-bullet-checked')) {
            index.classList.add('slider-nav-bullet-checked')
        } else {
            index.classList.remove('slider-nav-bullet-checked')
        }
    })
}

/*
checkedBullet[bullet].addEventListener('click', (evt) => {
    evt.preventDefault();
    checkedBullet[bullet].classList.toggle('slider-nav-bullet-checked')
    console.log('hello')
})
*/