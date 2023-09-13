(function() {
    // получение элементов с формы
    const form = document.forms.signIn;
    // проверка наличия формы в верстке
    if(!form) return;
    // слушатель события submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // получаем элемент формы
        const userEmail = form.elements.email;
        const userPassword = form.elements.password;
        // создаём объект дата для имитации отправки
        const data = {
            email: userEmail.value,
            password: userPassword.value,
        }
        console.log(data)
    })
})()
// функция собирает все данные с формы
function getAll(form) {
    const inputs = form.querySelectorAll('input'); // получаем псевдомассив инпутов
    const textareas = form.querySelectorAll('textarea'); // получаем псевдомассив textarea
    let result = {};
    for(let input of inputs) {
        switch (input.type) {
            case 'radio': {
                if(input.checked) {
                    result[input.name] = input.value;
                }
                break;
            }
            case 'checkbox': {
                if(!result[input.name]) result[input.name] = [];

                if(input.checked) result[input.name].push(input.value);
                break;
            }
            case 'file': {
                result[input.name] = input.files;
                break;
            }
            default: {
                result[input.name] = input.value;
            }
        }
    }
    for(let textarea of textareas) {
        result[textarea.name] = textarea.value;
    }

    return result;
}

function isEmailCorrect(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function setError(input, messageError) {
    if(input[0]) {
        setErrorChecked(input, messageError)
    } else {
        setErrorText(input, messageError)
    }
}

function setErrorChecked(inputs, messageError) {
    const error = errorCreator(messageError);
    inputs[0].parentElement.parentElement.insertAdjacentElement('afterend', error);
    function handler() {
        error.remove();
        for(let input of [...inputs]) {
            input.removeEventListener('input', handler);

            input.classList.remove('is-invalid');
        }
    }
    for(let input of [...inputs]) {
        input.classList.add('is-invalid');

        input.addEventListener('input', handler)
    }
}

function setErrorText(input, messageError) {
    const error = errorCreator(messageError);
    input.classList.add('is-invalid')
    input.insertAdjacentElement('afterend', error);
    input.addEventListener('input', () => {
        error.remove()
        input.classList.remove('is-invalid')
    }, {once: true}); // выполнение события один раз
}

function errorCreator(message) {
    let messageError = document.createElement('div')
    messageError.classList.add('invalid-feedback');
    messageError.innerText = message;
    return messageError;
}

(function() {
    const form = document.forms.signUp;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const errorsOldMessage = document.querySelectorAll('.invalid-feedback');

        for (let error of errorsOldMessage) error.remove();

        const userData = getAll(form);

        let errors = {}

        if(!userData.accept) errors.accept = 'Пожалуйста выберите пункт';

        if(!isEmailCorrect(userData.email)) errors.email = 'Пожалуйста введите корректный e-mail';

        if(userData.password.lenght < 8) errors.password = 'Пароль слишком короткий';

        if(Object.keys(errors).length) {
            Object.keys(errors).forEach((key) => {
                setError(form.element[key], errors[key])
            })
            return;
        }
        const data = {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            accept: userData.accept,
            avatar: userData.avatar,
        }
        console.log(data)
    })
})