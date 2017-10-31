
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var link1 = 'http://www.nbrb.by/API/ExRates/Currencies';
    var link2 = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
    var link3 = 'http://www.nbrb.by/API/ExRates/Rates/145'
    var link4 = 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1';
    var link5 = 'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2';

    function httpGet(url) {

        return new Promise(function (resolve, reject) {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

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


    httpGet(link1)
        .then(
            response => {
            console.log(`Fulfilled: ${response} \n REQUEST  IS DONE`);
    return httpGet(link2)
},
    error => console.log("Rejected: " + error))
.then(
        response => {
        console.log(`Fulfilled: ${response} \n REQUEST  IS DONE`);
    return httpGet(link3)
},
    error => console.log("Rejected: " + error))
.then(
        response => {
        console.log(`Fulfilled: ${response} \n REQUEST  IS DONE`);
    return httpGet(link4)
},
    error => console.log("Rejected: " + error))
.then(
        response => {
        console.log(`Fulfilled: ${response} \n REQUEST  IS DONE`);
    return httpGet(link5)
},
    error => console.log("Rejected: " + error))

setInterval(()=>console.log('111'), 100)