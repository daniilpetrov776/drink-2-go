const range = document.querySelector('#slider');
const inputMin = document.querySelector('.price-slider__nouislider-input--min');
const inputMax = document.querySelector('.price-slider__nouislider-input--max');
console.log(inputMin, inputMax)

export const getSliderRange = () => {
  if (range) {
    noUiSlider.create(range, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 1100
      },
      cssPrefix: 'noui-',
      margin: 0,
      padding: 0,
    });
  }

  range.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];
    if (handle === 0) {
      inputMin.value = Math.round(value);
    } else {
      inputMax.value = Math.round(value);
    }
  });
};

inputMin.addEventListener('change', () => {
  range.noUiSlider.set(inputMin.value);
});

inputMax.addEventListener('change', () => {
  range.noUiSlider.set(inputMax.value);
});
