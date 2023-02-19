
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

*/



// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 -'Poly' виведе  3 - Ajax.

// function logItems(items) {
//     console.log('--------------');
//     // for (let i = 0, num = 1; i < items.length; i+=1, num+=1){
//     //     console.log(`${num} - ${items[i]}`);
//     // }
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i+1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
