import { checkViewportAndShowNav } from './menu/menu.js';
import { updateSlider, createPaginationButtons } from './slider/slider.js';
import { getSliderRange } from './nouislider/range.js';
import { animateSelectArrow } from './select/select.js';
import { updateButtonVisibility } from './pagination/pagination.js';

document.addEventListener('DOMContentLoaded', () => {
  checkViewportAndShowNav();
  updateSlider();
  createPaginationButtons();
  getSliderRange();
  animateSelectArrow();
  updateButtonVisibility();
});
