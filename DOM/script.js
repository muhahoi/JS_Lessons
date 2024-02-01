//console.log(document.body);
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes); //позволяет получить все ноды/узлы этого родителя
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild); //<div class="wrapper">...</div>
//console.log(document.body.lastChild);

//** получаем родителя, соседей и детей */

//console.log(document.querySelector('#current').parentNode); // нода родителя <div class="first">...</div>
//console.log(document.querySelector('#current').parentNode.parentNode); //<div class="wrapper">...</div>

//console.log(document.querySelector('#current').parentElement); // нода родителя <div class="first">...</div>

//** получаем следующего соседа */
//console.log(document.querySelector('[data-current="3"]').nextSibling); // #text - перенос строки

//** получаем предыдущего соседа */
//console.log(document.querySelector('[data-current="3"]').previousSibling); // #text - тоже перенос строки

//** получить следующего соседа - элемент */
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//**получаем все элементы, кроме текстовых */
for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}
