const btn = document.querySelector('button')

function json(str) {
    return new Promise((res, rej) => {
        if (typeof str === 'string') {
            res(JSON.parse(str))
        } else {
            rej('В функцию json() передали не строку')
        }
    })
}

const fetchDL = () => {
    return new Promise((resolve, rejected) => {
        console.log('Запустился процесс промиса...')

        setTimeout(() => {
            rejected('Увы, вы не успели нажать на кнопку')
        }, 5000)

        btn.addEventListener('click', () => {
            resolve({
                ok: false,
                status: 200,
                jsonData: JSON.stringify({
                    name: 'Yan Olimov',
                    age: 29,
                })
            })
        })
    })
}
fetchDL()
.then((response) => {
    if(response.ok) {
        return json(response.ok);
    } else {
        throw 'Exception';
    }
})
.then((res) => {
    console.log('Промис выполнился успешно!')
    console.log(res)
})
.catch((err) => {
    console.log('Отработал catch в блоке')
    if (err === 'Exception') {
        console.log('Данные пришли некорректные, проверьте что вы получили')
    }
})
.finally(() => {
    console.log('Промис завершился')
})