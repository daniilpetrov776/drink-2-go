export const paginationButtons = document.querySelectorAll('.pagination-button');
const buttonsWithoutText = Array.from(paginationButtons).slice(1, paginationButtons.length - 1);
const paginationContainer = document.querySelector('.pagination');
const prevButton = document.querySelector('#prev-pagination');
const nextButton = document.querySelector('#next-pagination');

let activeIndex = Array.from(paginationButtons).findIndex((button) =>
  button.classList.contains('pagination-button--active')
);

export const updateButtonVisibility = () => {
  prevButton.style.display = activeIndex === 1 ? 'none' : 'block';
  nextButton.style.display = activeIndex === paginationButtons.length - 2 ? 'none' : 'block';
};

const updateActiveButton = (newIndex) => {
  paginationButtons[activeIndex].classList.remove('pagination-button--active');
  paginationButtons[newIndex].classList.add('pagination-button--active');

  activeIndex = newIndex;

  updateButtonVisibility();
};

buttonsWithoutText.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateActiveButton(index);
  });
});

const paginationClickHandler = (evt) => {
  if (evt.target.classList.contains('pagination-button--number')) {
    const index = Array.from(paginationButtons).indexOf(evt.target);
    if (index !== -1) {
      updateActiveButton(index);
    }
  }
};

prevButton.addEventListener('click', () => {
  if (activeIndex > 0) {
    updateActiveButton(activeIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (activeIndex < paginationButtons.length - 1) {
    updateActiveButton(activeIndex + 1);
  }
});


paginationContainer.addEventListener('click', paginationClickHandler);
