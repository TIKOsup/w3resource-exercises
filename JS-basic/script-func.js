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