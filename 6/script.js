// const home = {
//     chair: 'wood',
//     couch: 'soft',
//     table: 'ring',
//     isSmart: function() {
//         console.log('Да! Конечно, я умный дом, а ты чего ожидал))))')
//     }
// }

// home.isSmart()

const bookShelf = {
    bookOne: 'Лев Толстой',
    bookTwo: 'Скотт Ф.Фицжеральд',
    bookThree: 'А.С. Пушкин',
}

// for (let key in bookShelf) {
//     console.log(key)
// }

// const anowerBS = bookShelf
// console.log(anowerBS.bookOne)

// console.log(bookShelf === anowerBS)

const bookShelfDown = {
    bookEleven: 'Лев Толстой',
    bookTen: 'Скотт Ф.Фицжеральд',
    bookTwelve: 'А.С. Пушкин',
}

// console.log(bookShelf === bookShelfDown)

bookShelf.bookFour = 'Сэр Артур Конан Доиль'
// console.log(bookShelf.bookOne)
bookShelf.bookOne = 'Агата Кристи'
// console.log(bookShelf.bookTwo)
// console.log(bookShelf.bookFour)
// console.log(bookShelf.bookOne)
// for (let key in bookShelf) {
//     console.log(bookShelf[key])
// }
// delete bookShelf.bookThree

// const keys = Object.keys(bookShelf)
// console.log(keys)

// const kes = Object.values(bookShelf)
// console.log(kes)

// const kys = Object.entries(bookShelf)
// console.log(kys)

const bigShelf = Object.assign(bookShelf, bookShelfDown)
console.log(bigShelf)



const tea = {
    name: 'Brook bond',
    color: 'black',
    option: {
      type: 'Черный байховый',
      countrys: {
        ceylon: 'Настоящий цейлонский чай'
        // если появляется ещё один вложенный элемент, то с цепочку if добавляется ещё конструкция которая и так длинная
      }
  
    }
  }
  console.log(tea)
  
  // if
  
//   if (tea && tea.option && tea.option.type) {
//     console.log('Тип чая существует')
//   } else {
//     console.log('Непонятный чай')
//   }
  
  // вариант решения
  if (tea?.options?.country?.ceylon) {
    console.log('Тип чая существует')
  } else {
    console.log('Непонятный чай')
  }