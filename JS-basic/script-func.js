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