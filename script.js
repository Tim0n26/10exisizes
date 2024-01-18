//Задача 1:
// Объявите переменную с именем ‘myVar’ и присвойте ей значение 10. Выведите значение ‘myVar’ в div1. 
var myVar = 10;
document.getElementById("1").innerHTML = myVar;
//Задача 2:
// Преобразуйте строку ‘123’ в число. Выведите результат в div2. 
document.getElementById("2").innerHTML = Number('123');
//Задача 3:
// Преобразуйте число 123 в строку. Выведите результат в div3. 
document.getElementById("3").innerHTML = String(123);
//Задача 4:
// Проверьте, является ли значение переменной ‘myVar’ числом. Выведите результат в div4.
if (typeof myVar === 'number') {
  document.getElementById('4').innerText = 'число';
} else {
  document.getElementById('4').innerText = 'не число';
}
//Задача 5:
// Преобразуйте логическое значение true в строку. Выведите результат в div5.
document.getElementById("5").innerHTML = String(true);
//Задача 6:
// Преобразуйте строку ‘true’ в логическое значение. Выведите результат в div6.
document.getElementById("6").innerHTML = Boolean('true');
//Задача 7:
// Создайте объект с именем ‘myObj’, которая содержит поля ‘name’ и ‘age’. Выведите значение ‘myObj’ в div7.
var myObj = {
  name: "Tom",
  age: 28
}
document.getElementById("7").innerHTML = String("name: " + myObj.name + ", age: " + myObj.age);
//Задача 8:
// Проверьте, является ли значение переменной ‘myVar’ объектом. Выведите результат в div8.
var isObject = typeof myObj === 'object' && myObj !== null;
document.getElementById('8').innerHTML = isObject;
//Задача 9:
// Преобразуйте число 123.456 в строку, округлив его до двух знаков после запятой. Выведите результат в div9.
var n = 123.456;
document.getElementById('9').innerHTML = n.toFixed(2);
//Задача 10:
// Преобразуйте ‘123.456’ в число, округлив его до целого значения. Выведите результат в div10. 
document.getElementById('10').innerHTML = Math.round(parseFloat(n));