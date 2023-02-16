
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



*/



/* --------------------------------- TASK 3 --------------------------------- */





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
