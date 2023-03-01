
/* --------------------------------- TASK 1 --------------------------------- */

/*  Запиши условие в инструкции if так, чтобы функция работала правильно.

Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=
Вызов checkAge(20) возвращает "You are an adult"
Вызов checkAge(8) возвращает "You are a minor"
Вызов checkAge(14) возвращает "You are a minor"
Вызов checkAge(38) возвращает "You are an adult"
В теле функции есть только одна инструкция if
В теле функции нет инструкции else или else if  */

/* 

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

*/




/* --------------------------------- TASK 2 --------------------------------- */

/* Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!" */

/* 

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 

  return "Access denied, wrong password!";
  // Change code above this line
}

*/



/* --------------------------------- TASK 3 --------------------------------- */

/*
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

Объявлена функция checkStorage(available, ordered)
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
Вызов checkStorage(70, 0) возвращает "Your order is empty!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
*/

/*

function checkStorage(available, ordered) {
  // Change code below this line


  if (ordered === 0) {
return "Your order is empty!";
  } 
    if (ordered > available) {
return "Your order is too large, not enough goods in stock!";
  } 
return "The order is accepted, our manager will contact you";

  // Change code above this line
}

*/




/* --------------------------------- TASK 4 --------------------------------- */

/* Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"] */

/* 

const fruits = ["apple", "plum", "pear", "orange"]

console.log(fruits);

*/



/* --------------------------------- TASK 5 --------------------------------- */

/* Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

Имя переменной	Значение переменной
firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива
Объявлена переменная firstElement
Значение переменной firstElement это строка "apple"
Объявлена переменная secondElement
Значение переменной secondElement это строка "plum"
Объявлена переменная lastElement
Значение переменной lastElement это строка "orange" */

/* 

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

console.log(firstElement);
console.log(secondElement);
console.log(lastElement);

*/



/* --------------------------------- TASK 6 --------------------------------- */

/* Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "peach", "pear", "banana"] */


/* 

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits.splice(1, 1, "peach");
fruits.splice(3, 1, "banana");

console.log(fruits);

*/



/* --------------------------------- TASK 7 --------------------------------- */

/* Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

Объявлена переменная fruitsArrayLength
Значение переменной fruitsArrayLength это число 4 */


/* 

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

console.log(fruits);

*/




/* --------------------------------- TASK 8 --------------------------------- */

/* lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива
Объявлена переменная lastElementIndex
Значение переменной lastElementIndex это число 3
Объявлена переменная lastElement
Значение переменной lastElement это строка "banana" */


/* 

const fruits = ["apple", "peach", "pear", "banana"];


const lastElementIndex = fruits.length - 1;

const lastElement = fruits[lastElementIndex];
// Change code below this line


console.log(lastElementIndex);
console.log(lastElement);

*/


/* --------------------------------- TASK 9 --------------------------------- */

/* Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

Объявлена функция getExtremeElements(array)
Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"] */



/* 

function getExtremeElements(array) {
  // Change code below this line


const lastElementIndex = array.length - 1;
const lastElement = array[lastElementIndex];
const firstElementIndex = array[0];

return [firstElementIndex, lastElement]

  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

*/




/* --------------------------------- TASK 10 --------------------------------- */

/* Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

Объявлена функция splitMessage(message, delimiter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"] */


/* 

function splitMessage(message, delimiter) {
  let words = message.split(delimiter);
  // Change code below this line

  // Change code above this line
  return words;
}


console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

*/





/* --------------------------------- TASK 11 --------------------------------- */


/* Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

Объявлена функция calculateEngravingPrice(message, pricePerWord)
Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80 */


/* 

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

return message.split(" ").length * pricePerWord;

   // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

*/





/* --------------------------------- TASK 13 --------------------------------- */

/* Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
Объявлена функция slugify(title)
Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
Вызов slugify("English for developer") возвращает "english-for-developer"
Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks" */


/* 

function slugify(title) {
  // Change code below this line

const ss = title.toLowerCase().split(" ").join("-");
  
  return ss;

  // Change code above this line
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

*/



/* --------------------------------- TASK 14 --------------------------------- */

/* Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
Объявлена переменная firstTwoEls
Значение переменной firstTwoEls это массив ["apple", "plum"]
Объявлена переменная nonExtremeEls
Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
Объявлена переменная lastThreeEls
Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами */


/* 

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2);


console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

*/




/* --------------------------------- TASK 15 --------------------------------- */

/* Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

Объявлена переменная oldClients
Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
Объявлена переменная newClients
Значение переменной newClients это массив ["Peach", "Houston"]
Объявлена переменная allClients
Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Переменной allClients присвоен массив после применения метода concat с правильными аргументами */


/* 

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients) ; // Change this line

console.log(oldClients);
console.log(newClients);
console.log(allClients);

*/










/* --------------------------------- TASK 17 --------------------------------- */

/* Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

Объявлена переменная start
Значение переменной start это число 3
Объявлена переменная end
Значение переменной end это число 7
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 3
Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
На каждой итерации значение переменной i увеличивается на единицу
Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7 */


/* 

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

*/


/* --------------------------------- TASK 18 --------------------------------- */

/* Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

Объявлена функция calculateTotal(number)
Вызов функции calculateTotal(1) возвращает 1
Вызов функции calculateTotal(3) возвращает 6
Вызов функции calculateTotal(7) возвращает 28
Вызов функции calculateTotal(18) возвращает 171
Вызов функции calculateTotal(24) возвращает 300
Вызов функции calculateTotal() со случайным числом возвращает правильное значение */


/* 

function calculateTotal(number) {
 // Change code below this line

  let total = 0;

  for (i = 0; i <= number; i += 1) {
    total += i;
  }

  return total; 

  // Change code above this line
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal(32));

*/




/* --------------------------------- TASK 19 --------------------------------- */

/* Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 0
Условие цикла приводится к true до тех пор, пока i меньше 4
На каждой итерации значение переменной i увеличивается на единицу
В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
В теле цикла for используется вывод в консоль переменной fruit */


/* 

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}


*/


/* --------------------------------- TASK 20 --------------------------------- */

/* Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение
 */


/* 

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1)
  total += order[i]
  // Change code above this line
  return total;
}


console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

*/

