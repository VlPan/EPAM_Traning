let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let options = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0', 'http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'];

function httpGet(url) {

    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(xhr.responseText);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

options.forEach(function (option, index) {
    console.log(option);
    httpGet(option)
        .then(
            response => console.log(`Fulfilled: ${response} \n REQUEST ${index + 1} IS DONE`),
            error => console.log(`Rejected: ${error}`)
        );
});




