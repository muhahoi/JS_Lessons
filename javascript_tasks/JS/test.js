const obj = { name: 'John' };
//const keys = Object.keys(obj);
if (Object.keys(obj).length === 1) {
	console.log('В объекте есть только один ключ');
} else {
	console.log('В объекте больше одного ключа');
}
