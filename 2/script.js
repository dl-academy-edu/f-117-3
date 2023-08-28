// let i = prompt('Введите число больше 100')
//     if (i>=100) {
//         console.log('vveli chislo bolshe one hungred')
//     } else if (i<=100){
//         console.log('vveli chislo menshe one hungred')
//         prompt('Введите число больше 100')
//     }

let num;
do {
  num = prompt("Введите число больше 100?", 0 );
} while  (num <= 100 )