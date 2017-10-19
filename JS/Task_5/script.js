window.onbeforeunload = function (e) {
    var dialogText = 'Форма очищена!';
    console.log(dialogText);
    return dialogText;
};

$(document).ready(function () {

    var FormHandlerObject = function (Inputs) {
        this.fromDate = Inputs.fromDate || '24.09.2017';
        this.fromTime = Inputs.fromTime || '--:--';

        this.toDate = Inputs.toDate || "24.09.2017";
        this.toTime = Inputs.toTime || "--:--";

        this.radioOption = Inputs.radioOption || 'Wine';
        this.selectOneOption = Inputs.selectOneOption || "Celebrate";
        this.selectTwoOption = Inputs.selectTwoOption || "Present3";
    };

    var Inputs = getObjectFromLocalStorage('formObject');
    var formHandler = new FormHandlerObject(Inputs);

    var fromDate = document.getElementById('from_date');
    var fromTime = document.getElementById('from_time');
    var toDate = document.getElementById('to_date');
    var toTime = document.getElementById('to_time');
    var radioOptions = $('.hw-radio-options__option');
    var selectOptions = $('.hw-select');

    fromDate.value = changeFormat(formHandler.fromDate);
    fromTime.value = formHandler.fromTime;
    toDate.value = changeFormat(formHandler.toDate);
    toTime.value = formHandler.toTime;

    for (var i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].value === formHandler.radioOption) {
            radioOptions[i].checked = true;
        }
    }

    for (var i = 0; i < selectOptions.length; i++) {
        for (var y = 0; y < selectOptions[i].length; y++) {


            if (selectOptions[0][y].value === formHandler.selectOneOption) {
                console.log('FOUND!!!');
                selectOptions[0][y].selected = true;
            }

            if (selectOptions[1][y].value === formHandler.selectTwoOption) {
                console.log('FOUND!!!');
                selectOptions[1][y].selected = true;
            }


        }
    }

    console.log(selectOptions);

    $(fromDate).focusout(function ($e) {
        var value = $e.target.value;
        formHandler.fromDate = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });

    $(fromTime).focusout(function ($e) {
        var value = $e.target.value;
        formHandler.fromTime = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });

    $(toDate).focusout(function ($e) {
        var value = $e.target.value;
        formHandler.toDate = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });

    $(toTime).focusout(function ($e) {
        var value = $e.target.value;
        formHandler.toTime = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });


    $(selectOptions[0]).change(function ($e) {
        var value = $e.target.value;
        formHandler.selectOneOption = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });

    $(selectOptions[1]).change(function ($e) {
        var value = $e.target.value;
        formHandler.selectTwoOption = $e.target.value;
        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });


    $(radioOptions).change(function ($e) {
        console.log($e.target.value);
        formHandler.radioOption = $e.target.value;

        setObjectToLocalStorage('formObject', formHandler);
        getObjectFromLocalStorage('formObject');
    });

    function setObjectToLocalStorage(nameInLocalStorage, obj) {
        localStorage.setItem(nameInLocalStorage, JSON.stringify(obj));
    }

    function getObjectFromLocalStorage(name) {
        console.log(JSON.parse(localStorage.getItem(name)));
        return JSON.parse(localStorage.getItem(name));
    }

    function fillInputsAndOptions(FormHandlerObject) {

    }

    function changeFormat(string) {
        var arr = string.split('.');


        i = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = i;

        console.log(arr.join('-'));
        return arr.join('-');
    }


    changeFormat(formHandler.fromDate);
});






