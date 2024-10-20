import {updateSlider, createPaginationButtons} from './slider/slider.js';
import { getSliderRange } from './nouislider/range.js';
import { animateSelectArrow } from './select/select.js';
import { updateButtonVisibility } from './pagination/pagination.js';
createPaginationButtons();
updateSlider();
getSliderRange();
animateSelectArrow();
updateButtonVisibility();

