'use strict';

const box = document.getElementById('box');
//console.log(box);

const btn2 = document.getElementsByTagName('button')[1]; //вторая кнопка
//console.log(btn2);

//!-------когда выбраны все кнопки----------

const btns = document.getElementsByTagName('button'); //все кнопки с тегом button
//console.log(btns[3]); //четвертая кнопка из всех

//! даже если один элемент с таким тегом, то все равно надо указывать индекс. В этом случае [0]
//!------------------------------

const circles = document.getElementsByClassName('circle');
//console.log(circles);

const hearts = document.querySelectorAll('.heart'); // находит все элементы . hearts. У него есть метод forEach
//console.log(hearts);

hearts.forEach(item => {
	//console.log(item);
});

const oneHeart = document.querySelector('.heart'); // находит только первый элемент с этим классом
//console.log(oneHeart);

const firstDiv = document.querySelector('div');
console.log(firstDiv);
