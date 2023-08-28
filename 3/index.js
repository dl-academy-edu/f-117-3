// let place = "Тольятти";
// function showInfo() {
//     // Локальная переменная
//     let name = "Коля";
//     console.log(`${name} живет в ${place}`);
// }
// showInfo(); // Коля живет в Тольятти
// console.log(place); // Тольятти
// console.log(name);    

// function showInfo(name, place, age) {
//     console.log(`${name} живет в ${place} and your ${age}`);
// }

// showInfo("Коля", "Тольятти", "16"); 

// function showInfo(name="Максим", place="Москве") {
//     console.log(`${name} живет в ${place}`);
// }

// showInfo("Коля", "Тольятти"); 
// // Коля живет в Тольятти

// showInfo("Коля"); 
// // Коля живет в Москве

// showInfo(); 
// // Максим живет в Москве

// showInfo(""); 

// function showInfo(name='Maksim', location) {
//     let customName = name || "Коля"; 
    
//     let customLocation = location;
//     if (customLocation === undefined) {
//         customLocation = "Москве";
//     }
//     console.log(`${customName} живет в ${customLocation}`);
// }
// // Коля живет в Москве
// showInfo();
// // Коля живет в Москве
// showInfo("");

// function add(a, b) {
//     return a + b;
// }

// const result = add(1, 4);

// console.log(result); 

// function canShowImg(age) {
//     if (age >= 18) { return true; }
//     else { return false; }
// }
// function showImg(age) {
//     if (!canShowImg(age)){
//         return;
//     }
//     console.log("Вот ссылка на картинку!")
// }
// showImg(11); 
// showImg(18); 


// function add(a, b) {
//     return a + b;
//     console.log(a + b);
// }

// const result = add(1, 4);
// console.log(result);

// function showText() {
//     console.log("Привет мир!");
// }
// showText.code = "<div></div>";

// showText();  // Привет мир!

// console.log(showText.code); 
// function doSomething(func) {
//     func();
//     console.log("Начал выполнение функции");
   
//     console.log("Закончил выполнение функции");

// }

// doSomething(function () {
//     console.log("Идет выполнение кода...");
// });
function counterCreater() {
    let index = 0; 
    return function() {
        return index++;
    }
}

let siteCounter = counterCreater();
console.log(siteCounter()); // 0
console.log(siteCounter()); 