var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var link1 = 'http://www.nbrb.by/API/ExRates/Currencies';
var link2 = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
var link3 = 'http://www.nbrb.by/API/ExRates/Rates/145'
var link4 = 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1';
var link5 = 'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2';

function loadApi(url, callback ) {
    xhr.open("GET", url, true);
    xhr.send();
}