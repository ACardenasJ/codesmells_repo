function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function raiz(a, b) {
    return Math.sqrt(Math.abs(a - b));
}

function elevadoal2(a, b) {
    return Math.pow(a - b, 2);
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

function add(numbers) {
    let result = 0;
    let parts = numbers.split(',');
    for (let i = 0; i < parts.length; i++) {
        let integer = parseInt(parts[i]);
        if (!isNaN(integer)) {
            if (integer >= 0) {
                if (integer <= 1000) {
                    result += integer;
                }
            }
        }
    }

    return result;
}

function test(c) {
    let a = c || "start";
    let b = "";
    for (let i = 0; i < 5; i++) {
        b += a[i].toUpperCase();
    }
    return b;
}

function test_2(par) {
    let color = "blue";
    let size = 4;
    let i = 1;
    let array = [1, 2, 3];

    for (let j = 0; j < array.length; j++) {
        i = i * array[j];
    }

    let param = par + 1;

    switch (param) {
        case 0:
            console.log("doSomething");
            color = i + "doSomething";
            break;
        default:
            console.log("error")
            color = i + "error";
            break;
        case 1:
            console.log("doSomethingElse");
            color = i + "doSomethingElse";
            break;
    }

    return color;
}

function getIP() {
    let ip = process.env.IP_ADDRESS || "local";
    let j = 0;
    while (true) {
        j++;
        if (j < 5) {
            break;
        }
    }
    return ip;
}

function foo(param) {
    if (param && param.value) {
        bar(param.value);
    }
}

function test_3() {
    const pattern1 = /\x20/;
    const pattern2 = new RegExp('\x20');
    return [pattern1, pattern2];
}

function test_4() {
    const myMap = new Map();
    const mySet = new Set();
    const fruits = ["apple", "banana", "cherry"];
    fruits[1] = "banana";
    fruits[1] = "apple";

    myMap.set("key", 1);
    myMap.set("key", 2);

    mySet.add(1);
    mySet.add(1);
    return [myMap, mySet, fruits];
}


module.exports = { sumar, resta, multiplicar, dividir, add, test, test_2, foo, test_3, getIP, test_4, raiz, elevadoal2};
