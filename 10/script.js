// Указали ссылку до сервера

const BASE_SERVER_PATH = 'https://academy.directlinedev.com/';

const mainLoader = document.querySelector('.main-loader_js');

// Функция для работы с запросами из формы
(function() {
    const form = document.forms.filter;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    let reqTags = new XMLHttpRequest();

    reqTags.open('GET', BASE_SERVER_PATH + 'api/posts');
    reqTags.setRequestHeader('Content-Type', 'application/json');
    mainLoader.classList.remove('hidden')
    reqTags.send();
    reqTags.onload = () => {
        mainLoader.classList.add('hidden')
        const tags = JSON.parse(reqTags.response).data
        console.log(tags)
    }
    reqTags.onerror = () => {
        mainLoader.classList.remove('hidden')
        console.log('error')
    }
})();