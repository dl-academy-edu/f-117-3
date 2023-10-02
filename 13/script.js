// const user = {
//     name: 'Maksim',
//     dateOfBirth: 2005,
//     getName() {
//         return user.name
//     }
// }

// const user2 = {
//     name: 'Maks',
//     dateOfBirth: 2005,
//     getName() {
//         return this.name
//     }
// }

// console.log(user.getName())
// console.log('2', user2.getName())


// const user = {
//     name: 'Maksim',
//     dateOfBirth: 2005,
//     getName() {
//         // return user.name
//     },
//     calculateAge() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.dateOfBirth
//     }
// }

// console.log(user.calculateAge())


// const user = {
//     name: 'Maksim',
//     dateOfBirth: 2005,
//     getName() {
//         return this.name
//     },
//     getAge() {
//         return this.dateOfBirth
//     }
// }

// const user2 = {
//     name: 'Artem',
//     dateOfBirth: 2002,
// }

// const user3 = {
//     name: 'Andrey',
//     dateOfBirth: 2009,
// }

// const user2name = user.getAge.call(user3)
// console.log(user2name)

// const mainHero = {
//     name: 'SpiderMan',
//     health: 60,
//     strength: 5,
// }

// const badHero = {
//     name: 'Sandman',
//     health: 80,
//     strength: 10,
// }

// function printHeroName(extraInfo = '') {
//     console.log(`Имя: ${this.name}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`)
// }
// printHeroName.call(mainHero)
// printHeroName.apply(badHero, ['роль : злодей' + ' ' + 'Злыдный злыдень'])

// const binedHero = printHeroName.bind(mainHero, 'MainHero')
// binedHero()

const user = {
    name: 'Maksim',
    dateOfBirth: 2005,
    getName() {
        return this.name
    },
    getProgrammingLang() {
        return this.programmingLang
    }
}

// console.log(user.getName())

// const newGetName = user.getName.bind(user)

// console.log(user.getName.call(user))

// console.log(newGetName())