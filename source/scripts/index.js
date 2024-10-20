import { burgerButton } from './menu/menu.js';
import { updateSlider, createPaginationButtons } from './slider/slider.js';
import { getSliderRange } from './nouislider/range.js';
import { animateSelectArrow } from './select/select.js';
import { updateButtonVisibility } from './pagination/pagination.js';

document.addEventListener('DOMContentLoaded', () => {

  updateSlider();
  createPaginationButtons();
  getSliderRange();
  animateSelectArrow();
  updateButtonVisibility();
});
