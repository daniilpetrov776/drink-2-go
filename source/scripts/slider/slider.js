const slider = document.querySelector('.slider__slides-wrapper');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.slider-button--prev');
const nextButton = document.querySelector('.slider-button--next');

let currentIndex = 0;

export const updateSlider = () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  const paginationButtons = document.querySelectorAll('.slider__slider-pagination-button');

  paginationButtons.forEach((button, index) => {
    button.classList.toggle('slider__slider-pagination-button--active', index === currentIndex);
  });
};

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

const upadetHandlers = () => {
  const paginationButtons = document.querySelectorAll('.slider__slider-pagination-button');

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });
};

// автоматически добавляет нужное количество кнопок пагинации в зависимости от количества слайдов
export const createPaginationButtons = () => {
  const paginationContainer = document.querySelector('.slider__slider-pagination');
  paginationContainer.innerHTML = '';

  slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.classList.add('slider__slider-pagination-button');
    button.dataset.index = index;
    if (index === currentIndex) {
      button.classList.add('slider__slider-pagination-button--active');
    }

    paginationContainer.appendChild(button);
    upadetHandlers();
  });
};


