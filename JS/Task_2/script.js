// Factorial

function fact(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * fact(n - 1)
    }
}
console.log(fact(5)); // Вычислить факториал 5

// Fibonacci

function Fib(number) {
    var arr = [0, 1];
    var arrEl;
    for (var i = 2; i < number; i++) {
        if (number > 2) {
            arrEl = arr[i - 1] + arr[i - 2];
            arr.push(arrEl);
        } else {
            return arr;
        }
    }
    return arr;
}

console.log(Fib(10)); // Сгенерировать массив из 10 чисел фибоначи

// Simple Numbers
// generate Array of simple numbers. number is amount of array
function generatePrimeNumbersArray(number) {
    var generatePrimeNumbersArray = [];
    var currentStep = 2;
    next:
        while (generatePrimeNumbersArray.length < number) {
            for (var i = currentStep; i < Infinity; i++) {
                    for (var j = 2; j < i; j++) {
                        currentStep = i + 1;
                        if (i % j === 0) continue next;
                    }
                generatePrimeNumbersArray.push(i);
                continue next;
            }
        }
    return generatePrimeNumbersArray;
}


console.log(generatePrimeNumbersArray(1)); // Сгенерировать массив из 10 простых чисел