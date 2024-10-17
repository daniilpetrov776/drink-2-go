const slider = document.querySelector('.slider__slides-wrapper');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.slider-button--prev');
const nextButton = document.querySelector('.slider-button--next');

const backgroundColors = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];
const viewportWidth = window.innerWidth;

let currentIndex = 0;

const updateBackground = () => {
  const sliderContainer = document.querySelector('.slider');

  if (viewportWidth >= 768 && viewportWidth <= 1439) {
    sliderContainer.style.background = `linear-gradient(
      to bottom,
      ${backgroundColors[currentIndex % backgroundColors.length]} 0%,
      ${backgroundColors[currentIndex % backgroundColors.length]} calc(100% - 188px),
      #FFFFFF calc(100% - 188px),
      #FFFFFF 100%
  )`;
  } else {
    sliderContainer.style.backgroundColor = backgroundColors[currentIndex % backgroundColors.length];
  }
};

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
  updateBackground();
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


