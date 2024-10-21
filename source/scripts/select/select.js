const selectField = document.querySelector('.filter-select__select-field');
const selectArrow = document.querySelector('.filter-select__select-arrow');

export const animateSelectArrow = () => {
  if (selectField && selectArrow) {
    selectField.addEventListener('focus', () => {
      selectArrow.style.transform = 'translateY(-50%) rotate(180deg)';
    });

    selectField.addEventListener('blur', () => {
      selectArrow.style.transform = 'translateY(-50%) rotate(0deg)';
    });
  }
};
