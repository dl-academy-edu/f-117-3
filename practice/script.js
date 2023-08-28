// const existedUserLogin = 'the_best_user';
// const existedUserPassword = '12345678';

// const userLogin = prompt("Введите логин").trim();
// const userPassword = prompt("Введите пароль").trim();

// if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
//     alert(`Добро пожаловать ${existedUserLogin}!`);
// } else {
//     alert("Логин или пароль введён не верно!")
// }


// const question1 = 'Сколько будет 2 + 2?';
// const question2 = 'Сколько будет 2 * 2?';
// const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
// const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
// const question5 = 'Сколько будет 2 + 2 * 2?';

// const answer1 = 4;
// const answer2 = 4;
// const answer3 = 1;
// const answer4 = 12;
// const answer5 = 6;

// let correctAnswer = 0;
// let incorrectAnswer = 0;

// const userAnswer1 = prompt(question1);
// if (Number(userAnswer1) === answer1) {
//     alert('Ответ верный');
//     correctAnswer += 1;
// } else {
//     alert('Ответ не верный')
//     incorrectAnswer += 1;
// }

// const userAnswer2 = prompt(question2);
// if (Number(userAnswer2) === answer2) {
//     alert('Ответ верный');
//     correctAnswer += 1;
// } else {
//     alert('Ответ не верный')
//     incorrectAnswer += 1;
// }
 
// const userAnswer3 = prompt(question3);
// if (Number(userAnswer3) === answer3) {
//     alert('Ответ верный');
//     correctAnswer += 1;
// } else {
//     alert('Ответ не верный')
//     incorrectAnswer += 1;
// }
 
// const userAnswer4 = prompt(question4);
// if (Number(userAnswer4) === answer4) {
//     alert('Ответ верный');
//     correctAnswer += 1;
// } else {
//     alert('Ответ не верный')
//     incorrectAnswer += 1;
// }
 
// const userAnswer5 = prompt(question5);
// if (Number(userAnswer5) === answer5) {
//     alert('Ответ верный');
//     correctAnswer += 1;
// } else {
//     alert('Ответ не верный')
//     incorrectAnswer += 1;
// }

// alert(`Конец теста! Правильные ответы - ${correctAnswer}. Неправильные ответы - ${incorrectAnswer}!`)

// const getName1 = function(name, surname) {
//     return `Имя равно ${name} ${surname}`
// }

// function getName2(name) {
//     return `Имя равно ${name}`
// }

// const getName3 = (name) => {
//     return `Имя равно ${name}`
// }

// console.log('getName1', getName1('getName1', 'melon'));
// console.log('getName2', getName2('getName2'));
// console.log('getName3', getName3('getName3'));

// const getSumOfNumbers = (number, type = 'odd') => {
//     if (typeof number !== "number") {
//         return NaN
//     }

//     let sum = 0;

//     for (let i = 0; i <= number; i++ ) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (type === '') {
//             sum += i;
//         } else if (isEven && type === "even") {
//             sum += i;
//         } else if (isOdd && type === "odd") {
//             sum += i;

//         }
//     }
//     return sum;
// }

// console.log(getSumOfNumbers(10, ''));
