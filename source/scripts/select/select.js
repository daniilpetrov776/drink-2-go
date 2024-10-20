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

// export const animateSelectArrow = () => {
//   if (selectField && selectArrow) {
//     selectField.addEventListener('focus', () => {
//       // Изменяем положение стрелки
//       selectArrow.style.transform = 'translateY(-50%) rotate(180deg)';

//       // Раскрываем опции при получении фокуса
//       selectField.size = selectField.options.length;
//     });

//     selectField.addEventListener('blur', () => {
//       // Возвращаем стрелку в исходное положение
//       selectArrow.style.transform = 'translateY(-50%) rotate(0deg)';

//       // Закрываем опции, когда элемент теряет фокус
//       selectField.size = 1;
//     });

//     selectField.addEventListener('change', () => {
//       // Закрываем опции после изменения выбора
//       selectField.blur();
//     });
//   }
// };
