var modal = document.querySelector('.modal');
var contactButton = document.querySelector('.contact-us');
var modalClose = document.querySelector('.modal-close');


contactButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	modal.classList.remove('modal-hidden');
})

modalClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modal.classList.add('modal-hidden');
})