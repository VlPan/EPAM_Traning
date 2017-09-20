var increment = function (value) {
    return ++value;
}

function main(){
    var i = 10;
    console.info("Value of i before increment is : " + i);
    i = increment(i);
    console.info("Value of i before increment is : " + i);
}

main();