let array = [
	'John',
	34,
	'John',
	'jOhin',
	'55',
	55,
	'55',
	55,
	'55',
	41,
	1998,
	199.5,
	'toUpperCase',
	55,
	'Ivan',
	1998,
];

const uniq = array.filter((item, index) => array.indexOf(item) === index);

let uniqArr = [];
for (let i = 0; i < uniq.length; i++) {
	if (
		typeof uniq[i] === 'string' &&
		uniq.includes(uniq[i]) &&
		uniq.includes(parseInt(uniq[i]))
	)
		continue;
	{
		uniqArr.push(uniq[i]);
	}
}

console.log(uniqArr);
