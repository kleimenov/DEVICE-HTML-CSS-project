
let checkedBullet = document.querySelectorAll('.slider-nav-bullet');

for (let bullet in checkedBullet) {
    checkedBullet[bullet].addEventListener('click', (evt) => {
        evt.preventDefault();
        checkedBullet[bullet].classList.toggle('slider-nav-bullet-checked')
    })
}