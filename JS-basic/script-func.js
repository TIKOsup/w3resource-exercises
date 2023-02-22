// ex1
function ex1() {
    let num = document.getElementById("ex1").value;
    document.getElementById("ex1-res").value = reverseNum(num);
}

function reverseNum(num) {
    let str = num.toString();
    let res ="";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str.charAt(i);
    }
    return res;
}

// ex2
function ex2() {
    let str = document.getElementById("ex2").value;
    document.getElementById("ex2-res").value = isPolindrome(str);
}

function isPolindrome(str) {
    str = str.replace(" ", "").toLowerCase();
    let cnt = 0;
    if (str === "") return "";
    // if string's length is even
    if ((str.length % 2) === 0) cnt = str.length / 2;
    else {
        if (str.length === 1) return true;
        else cnt = (str.length - 1) / 2;
    }
    for (let i = 0; i < cnt; i++) {
        if (str[i] != str.slice(-1-i)[0]) return false;
    }
    return true;
}

// ex3
function ex3() {
    let str = document.getElementById("ex3").value;
    document.getElementById("ex3-res").value = getStrComb(str);
}

function getStrComb(str) {
    let res = "";
    for (let i = 0; i <= str.length - 1; i++) {
        for (let j = 1 + i; j <= str.length; j++) {
            if (res !== "") res += ", ";
            res += str.substring(i, j);
        }
    }
    return res;
}

// ex4
function ex4() {
    let str = document.getElementById("ex4").value;
    document.getElementById("ex4-res").value = sortStr(str);
}

function sortStr(str) {
    return str.split("").sort().join("");
}

// ex5
function ex5() {
    let str = document.getElementById("ex5").value;
    document.getElementById("ex5-res").value = capitalize(str);
}

function capitalize(str) {
    let res = [];
    str.split(" ").forEach(function(substr) {
        res.push(substr.charAt(0).toUpperCase() + substr.slice(1));
    });
    return res.join(" ");
}

// ex6
function ex6() {
    let str = document.getElementById("ex6").value;
    document.getElementById("ex6-res").value = longestWord(str);
}

function longestWord(str) {
    let arr = str.split(" ");
    let maxIndex = 0;
    arr.forEach(function(substr, index) {
        if (substr.length > arr[maxIndex].length) maxIndex = index;
    });
    return arr[maxIndex];
}

// ex7
function ex7() {
    let str = document.getElementById("ex7").value;
    document.getElementById("ex7-res").value = numOfVowels(str);
}

function numOfVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let sum = 0;
    str.split("").forEach(function(word) {
        if (vowels.includes(word)) sum++;
    })
    return sum;
}

// ex8
function ex8() {
    let num = document.getElementById("ex8").value;
    document.getElementById("ex8-res").value = isPrime(num);
}

function isPrime(num) {
    num *= 1;
    if (num === 1) return false;
    else if (num === 2) return true;
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}

// ex9
function ex9() {
    let val = document.getElementById("ex9").value;
    document.getElementById("ex9-res").value = getType(val);
}

function getType(val) {
    return typeof parseInt(val);
}

// ex10
function ex10() {
    let n = document.getElementById("ex10").value;
    let res = document.getElementById("ex10-res");
    let child = res.lastElementChild;
    while (child) {
        res.removeChild(child);
        child = res.lastElementChild;
    }
    createIdentityMatrix(n).split(",").forEach(function(row) {
        res.appendChild(document.createElement("p")).innerHTML = row;
    })
}

function createIdentityMatrix(n) {
    let res = "", str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (str !== "") str += " ";
            if (i === j) str += "1";
            else str += "0";
        }
        res = res + str + ",";
        str = "";
    }
    return res;
}

// ex11
function ex11() {
    let arr = document.getElementById("ex11").value;
    document.getElementById("ex11-res").value = secondMinMax(arr);
}

function secondMinMax(arr) {
    arr = arr.split(",");
    let min = arr[0], max = arr[0];
    arr.forEach(function(el) {
        if (el < min) min = el;
        if (el > max) max = el;
    });
    return min + "," + max;
}

// ex12
function ex12() {
    let n = document.getElementById("ex12").value;
    document.getElementById("ex12-res").value = isPerfectNum(parseInt(n));
}

function isPerfectNum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

// ex13
function ex13() {
    let n = document.getElementById("ex13").value;
    document.getElementById("ex13-res").value = factors(n);
}

function factors(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr.push(i);
    }
    return arr;
}