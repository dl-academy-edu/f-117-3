// let cats = {
//     kittens: ["Пухляш", "Скромняш", "Истеряш"],
//     favoriteToy: {
//         name: "мячик",
//         size: "маленький",
//     },
//     sayHi: function() {alert("Мяу")}
// }
// cats.sayHi()
// let qwe = null;
// console.log(typeof(qwe))

// let str = "Моя строка!";
// let arr = ["желтый", "зеленый", "красный", "синий"];
// let smile = "\u{1F60D}";  // 😍

// console.log(str.length)
// console.log(arr.length)
// console.log(smile.length)


// let str = "Моя строка!";
// let arr = ["желтый", "синий", "зеленый"];

// str[2]; //"я"
// str[3]; //" "

// let person = {
//     age: 17,
//     home: {
//         city: "Тольятти",
//         street: "Московский проспект",
//     },
//     favoriteColors: ["желтый", "синий", "фиолетовый"],
//     sayHi: function(){alert("Привет")}
// }
// console.log(person.favoriteColors[2])
// ; // 17

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(rest.length); 
// console.log(...rest); 


// let arr = ["t", "e", "s", "t"];

// let rez1 =  arr.slice(1, 3); 
// console.log(rez1)

// let rez2 = arr.slice(-3);
// console.log(rez2);        

// ["Я", "учу", "JS"].forEach(function(item, index, array)   
//    {  console.log(`Индекс элемента "${item}" в     массиве [${array}] равен ${index}`);
//    }
// );


// let users = [{id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}];

// let user = users.find(item => item.id === 2); 
// // {id: 2, name: "Петя"}
// user = users.find(item => item.id === 5); 
// // undefined
// let masha = users.findIndex(item => item.name === "Маша"); // 2
// let dima = users.findIndex(item => item.name === "Дима"); // -1
// console.log(dima)

// let words = ["Red", "Green", "Yellow"].map(
//     (item, index, ) => ({
//     length: item.length, 
//     word: item,
//     id: index
//     })
//     );
//     console.log(words); 

// let qwe = [ 1, 27, 16 ];  
// console.log(qwe.sort())

// let str = "Я люблю JavaS cript";
// console.log(str.slice(0, 13));    // "Я люблю Java"
// console.log(str.slice(0));    // "Я люблю JavaScript"
// console.log(str.slice(-6));    // "Script"
// console.log(str.slice(-12, -6)); 

// let qwe = "a".localeCompare("Z"); 
// console.log(qwe)

// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const giveParcel = () => {
//     const clientName = peopleWaiting.shift()
//     alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
// }

// const leaveQueueWithoutParcel = () => {
//     const clientName = peopleWaiting.shift()
//     alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`)
// }

// giveParcel()
// giveParcel()
// giveParcel()

// for (let i = peopleWaiting.length; i > 0; --i) {
//     leaveQueueWithoutParcel()
// }
