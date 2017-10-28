var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var options = ['http://www.nbrb.by/API/ExRates/Currencies', 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0','http://www.nbrb.by/API/ExRates/Rates/145', 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1',
    'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2'];

xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log('REQUEST DONE');
        console.log(xhr.responseText);
    }

}

options.forEach(function (option) {
    console.log(option);
    xhr.open('GET', option, false);
    xhr.send();
    xhr.onreadystatechange();
})
