if (location.search) {

    const params = {};
    
    const arrayStringParams = location.search.substring(1).split("&");

    for (let stringParam of arrayStringParams) {
        let param = stringParam.split("=");
        let nameParam = param[0]
        let valueParam = param[1]

        if (nameParam in params) {
            params[nameParam].push(valueParam);
        } else {
            params[valueParam] = (valueParam)
        }
    }

    const filterForm = document.forms.filterForm

    const updateInput = (gInput, typeParam) => {
        for (let input of gInput) {
            const param = params[typeParam];
            if (!param) return;
            for (let partParam of param) {
                if (partParam === input.value) {
                    input.checked = true;
                }
            }
        }
    }
    updateInput(filterForm.modelPhone, "modelPhone")
    updateInput(filterForm.howShow, 'howShow')

    filterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let arrayCheckedInput = [];

        const addCheckedInput = (nameGroupInput, typeParam) => {
            for (checkbox of nameGroupInput) {
                if(checkbox.checked) {
                    arrayCheckedInput.push(`${typeParam}=${checkbox.value}`)
                }
            }
        }

        addCheckedInput(e.target.modelPhone, "modelPhone");
        addCheckedInput(e.target.howShow, "howShow");

        let stringCheckboxInput = "";

        for ([index, activeInput] of arrayCheckedInput.entries()) {
            stringCheckboxInput += activeInput;
            if (index != arrayCheckedInput.length - 1) {
                stringCheckboxInput += "&"
            }
        }

        const baseUrl = `${location.origin}${location.pathname}`
        const newUrl = baseUrl + `?${stringCheckboxInput}`
        location = newUrl
    })
}
