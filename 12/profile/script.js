(function() {
    const profileImg = document.querySelector('.j-profile-img')
    const profileName = document.querySelector('.j-profile-name')
    const profileSurname = document.querySelector('.j-profile-surname')
    const profileEmail = document.querySelector('.j-profile-email')
    const profileLocation = document.querySelector('.j-profile-location')
    const profileAge = document.querySelector('.j-profile-age')

    const buttonOpeningModalEditor = document.querySelector('.j-editing-button');
    const modalEditor = document.querySelector('.j-modal-editing');
    const modalLoader = document.querySelector('.loader_js');
    const buttonCloseModalEditor = document.querySelector('.j-close-modal-editing');

    const editingForm = document.forms.editingForm;
    const mainLoader = document.querySelector('.main-loader_js');

    let loaderCount = 0;
    let profile = null;

    function showLoader() {
        loaderCount++
        if(loaderCount <= 0) {
            loaderCount = 0;
            mainLoader.classList.add('hidden')
        }
    }

    function hideLoader() {
        loaderCount--
        if(loaderCount <= 0) {
            loaderCount = 0;
            mainLoader.classList.add('hidden')
        }
    }

    getProfile()

    function getProfile() {
        showLoader()
        sendRequest({
            method: 'GET',
            url: `api/users/${localStorage.getItem('userId')}`,
        })
        .then(async res => {
            const response = await res.json();
            if (response.success) {
                profile = response.data;
                renderProfile();
            } else {
                location.pathname = '/12/profile/';
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            hideLoader()
        })
    }

    function renderProfile() {
        profileImg.style.backgroundImage = `url(${BASE_SERVER_PATH + profile.photoUrl})`
        profileName.innerText = profile.name
        profileSurname.innerText = profile.surname
        profileEmail.innerText = profile.email
        profileLocation.innerText = profile.location
        profileAge.innerText = profile.age
    }

    buttonCloseModalEditor.addEventListener('click', () => {
        interectionModal(modalEditor);
    })
    buttonOpeningModalEditor.addEventListener('click', () => {
        editingForm.email.value = profile.email;
        editingForm.name.value = profile.name;
        editingForm.surname.value = profile.surname;
        editingForm.location.value = profile.location;
        editingForm.age.value = profile.age;
        interectionModal(modalEditor);
    })

    modalEditor.addEventListener('submit', (e) => {
        e.preventDefault(e);
        modalLoader.classList.remove('hidden');
        const data = new FormData(editingForm);
        sendRequest({
            method: 'PUT',
            url: 'api/users',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
            body: data,
        })
        .then( async res => {
            const response = await res.json();
            if(response.status === 401 || response.status === 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.pathname = '12';
                throw {_message: 'Ошибка доступа'}
            }
            if(response.success) {
                profile = response.data;
                renderProfile()
            }
        })
        .catch(err => {
            if(err?._message) {
                alert(err._message)
            }
        })
        .finally(() => {
            modalLoader.classList.add('hidden')
            interectionModal(modalEditor)
        })
    })
})()

