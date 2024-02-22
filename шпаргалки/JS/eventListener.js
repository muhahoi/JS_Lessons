// Получение ссылки на элемент
const button = document.querySelector('button');

// Добавление обработчика события клика на кнопку
button.addEventListener('click', handleClick);

// Удаление обработчика события клика на кнопку
button.removeEventListener('click', handleClick);

// Обработчик события двойного клика на кнопку
button.addEventListener('dblclick', handleDoubleClick);

// Обработчик события наведения курсора на кнопку
button.addEventListener('mouseover', handleMouseOver);

// Обработчик события увода курсора с кнопки
button.addEventListener('mouseout', handleMouseOut);

// Обработчик события нажатия клавиши на кнопке
button.addEventListener('keydown', handleKeyDown);

// Обработчик события отпускания клавиши на кнопке
button.addEventListener('keyup', handleKeyUp);

// Обработчик события фокусировки на кнопке
button.addEventListener('focus', handleFocus);

// Обработчик события потери фокуса кнопкой
button.addEventListener('blur', handleBlur);

// Обработчик события отправки формы
document.querySelector('form').addEventListener('submit', handleSubmit);

// Обработчик события изменения значения в поле ввода
document.querySelector('input').addEventListener('input', handleInput);

// Обработчик события изменения значения в поле ввода (после потери фокуса)
document.querySelector('input').addEventListener('change', handleChange);