const reviewButton = document.querySelector('.popup');
const reviewsDiv = document.querySelector('.reviews');
const arrow = document.querySelector('.shape');
reviewButton.addEventListener('click', () => {
  reviewsDiv.classList.toggle('opened');
  arrow.classList.toggle('opened');
})