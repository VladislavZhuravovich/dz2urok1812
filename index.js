// zadanie1
let a1= true + false;
console.log(a1);
// приводит к числу true =1 false = 0 

let a2 = 12 / '6';
console.log(a2);
// '6' преобразовывается в число 6

let a3 = 'number' + 15 + 3;
console.log(a3);
// так как 'number' - строка, все значения преобразовываются в строку 

let a4 = 15 + 3 + 'number';
console.log(a4);
// так как 'number' стоит в конце, 1 действие будет сложение чисел, а потом преобразование их в строку 

let a5 = [1]>null;
console.log(a5);
// так как [1]= 1, а null= 0 

let a6 = 'foo' + +'bar' ;
console.log(a6);
// выполняется +'bar', а так как это не число , получается NaN, потом преобразовывает все в строку и получаем ответ 

let a7 = 'true'== true;
console.log(a7);
// 'true' преобразовывается в NaN , а true в 1 

let a8 = false == 'false';
console.log(a8);
// false в 0 , а 'false' в NaN

let a9 = null == '';
console.log(a9);
// null равен только null или undefined

let a10 = !!'false'==!!'true';
console.log(a10);
// !!- преобразовывает в boolean , а так как это не пустые строки , преобразоывает их в true

let a11 = ['x'] == 'x';
console.log(a11);
// ['x'] преобразовывает в строку 'x'

let a12 = [] + null + 1;
console.log(a12);
// []- игнорируется, все остальное преобразовывется в строку 

let a13 = 0 || '0' && {};
console.log(a13);
// преобразовывает в Boolean 0= false, '0' = true , {}=true 

let a14 = [1,2,3]==[1,2,3];
console.log(a14);

let a15 = !!null;
console.log(a15);
// !!- преобразовывает в boolean, null = 0

let a16 = !!undefined;
console.log(a16);
// !!- преобразовывает в boolean, undefined = 0


// zadanie2

// let i=20;

// while (i) {
//     alert(i--);
//     console.log(i);
// }
// последнее значение будет 0 , так как i-- отнимает 1 от i 

//zadanie3

// let q= 39;

// while (q<91) {
//     q++
//     console.log(q)   
// }

//zadanie4 

// let w=8;

// while (w<340) {

//     w= w+4 ;
//     console.log(w);
// }

//zadanie5

//  for (let e = 100; e>-6; e--) {
//     console.log(e); 
// }

//zadanie6 

// let str = '';
// for (let r = 0; r < 15; r++) {
//     str+='y';
//     console.log(str);
// }

//zadanie7

// for (let t = 0; t < 102; t=t+2) {
//         console.log(t);
// }

//zadanie8

// let sum=0;
// for (let y = 0; y <=100; y++) {
//     sum +=y;
// }
// console.log(sum);

//zadanie9

// let str = '';

// for (let u = 1; u < 11; u=u+2) {
//     str=str+u+' ';
//     console.log(str) 
// }

//zadanie10

// let str = '';

// for (let o = 123; o > 117; o--) {
//     str=str+'-'+o;
//     console.log(str);
// }

//zadanie11

// let str = '';

// for (let p = 1; p < 10; p++) {
//     str=str+'-'+p;
//     console.log(str+'-');
// }

//zadanie12

// let chislo= prompt('Введите 1 число','');
// let chislo2=prompt('Введите 2 число','');

// if (chislo==chislo2) {
//     console.log('Все хорошо');   
// }else{
//     console.log('Числа не равны, попробуй снова');
// }

// chislo==chislo2 ? console.log('Все хорошо') : console.log('Числа не равны, попробуй снова');

//zadanie13

let NamberA= +prompt('Введите 1 число','');
let NamberB= +prompt('Введите 2 число','');
const sum=NamberA + NamberB;

console.log(sum)
const m=10;

if (sum > m) {
    console.log('Все хорошо');  
}else {
    console.log('Сумма не больше 10');
}

