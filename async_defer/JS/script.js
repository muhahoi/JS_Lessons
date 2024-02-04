'use strict';

const p = document.querySelectorAll('p');
console.log(p);

//добавляем скрипт в HTML
const script = document.activeElement('script');

//указываем адрес скрипта
script.src = 'js/script.js';

// отключаем async
script.async = false;

// добавляем скрипт в конец body
document.body.append(script);
