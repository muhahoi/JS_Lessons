'use script';

//const bigint = 1287323874162873461927319237192378192837129837129n;

//const sameBigint = BigInt(1287323874162873461927319237192378192837129837129);

//console.log(typeof bigint); // bigint

//console.log(5n + 1); // ошибка
//console.log(Math.round(5n)); // ошибка
//console.log(1n + 2n); //3n
//console.log(5n / 2n); // 2n - округленный результат без дробной части
//console.log(2n > 1n); //true
//console.log(2n > 1); //true
//console.log(2n === 2); //false

//*---------

const bigint = 1n;
let number = 2;

//console.log(bigint + BigInt(number)); // 3n

//console.log(Number(bigint) + number); // 3
//console.log(+bigint + number); // ошибка
