
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var link1 = 'http://www.nbrb.by/API/ExRates/Currencies';
var link2 = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
var link3 = 'http://www.nbrb.by/API/ExRates/Rates/145'
var link4 = 'http://www.nbrb.by/API/ExRates/Rates/298?onDate=2017-10-1';
var link5 = 'http://www.nbrb.by/API/ExRates/Rates/USD?ParamMode=2';




function request(url, callback) {
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    
    
    xhr.onreadystatechange = function (e) {
        
                if (xhr.readyState !== 4) return;
        
                if (xhr.status !== 200) {
                    console.log(xhr.status + ': ' + xhr.statusText);
        
                } else {
                    console.log(xhr.responseText);
                    console.log('REQUEST DONE');
                }
            }
    
    xhr.send();
    if (callback) {
        callback();
    }
}





request(link1, () => request(link2, () => request(link3, () => request(link4, () => request(link5)
))))

// setInterval(()=>console.log('interval', 500), 100) Check!
