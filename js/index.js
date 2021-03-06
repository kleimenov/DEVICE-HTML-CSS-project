
let bullets = document.querySelectorAll('.slider-nav-bullet');
let sliderItems =document.querySelectorAll('.slider-items');



for (let index in bullets) {
    bullets[index].addEventListener('click', (evt) => {
        evt.preventDefault();
        document.querySelector('.slider-nav-bullet-checked').classList.remove('slider-nav-bullet-checked');
        bullets[index].classList.add('slider-nav-bullet-checked');
        for (let slide of sliderItems) {
            slide.classList.add('hide');
        }
        sliderItems[index].classList.remove('hide')
    })
}
