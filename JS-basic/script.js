// ex1
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                  "Thursday", "Friday", "Saturday"];

function currentTime() {
  let ex1_date = new Date();

  document.getElementById("ex1").innerHTML = "Today is: " 
    + WEEKDAYS[ex1_date.getDay()] + ".\nCurrent time is: " 
    + ex1_date.getHours() + ((ex1_date.getHours() >= 12) ? " PM" : " AM") 
    + " : " + ex1_date.getMinutes() + " : " + ex1_date.getSeconds();
}

// ex2
function printWindow() {
  window.print();
}

// ex3
function currentDate() {
  let ex3_date = new Date();
  let dd = ex3_date.getDate();
  let mm = ex3_date.getMonth() + 1;
  let yyyy = ex3_date.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  document.getElementById("ex3").innerHTML = `${mm}-${dd}-${yyyy}`;
}

// ex4
function triangleArea() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;

  if (a == "" || b == "" || c == "") 
    document.getElementById("ex4").innerHTML = "Fill triangle's sides first!";
  let s = ((parseInt(a) + parseInt(b) + parseInt(c)) / 2);
  document.getElementById("ex4").innerHTML = 
    Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

// ex5
let interval;

function rotateStrRight() {
  const element = document.getElementById("ex5");
  const strNode = element.childNodes[0];
  let str = strNode.data;

  interval = setInterval(() => {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    strNode.data = str;
  }, 100);

  document.getElementById("ex5-start-btn").hidden = true;
  document.getElementById("ex5-stop-btn").hidden = false;
}

function stopRotateStr() {
  clearInterval(interval);
  document.getElementById("ex5-start-btn").hidden = false;
  document.getElementById("ex5-stop-btn").hidden = true;
}

// ex6
function ex6() {
  const year = document.getElementById("leap-year").value;

  if (year == "") 
    document.getElementById("ex6").innerHTML = "Enter a year first!"
  else {
    document.getElementById("ex6").innerHTML = isLeapYear(year);
  }
}

function isLeapYear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// ex7
function ex7() {
  let date = new Date();
  let i = 2014;
  let text = "";

  while (i <= 2050) {
    date.setFullYear(i, 0, 1);
    if (date.getDay() === 0) {
      text += `1st January is being a Sunday ${date.getFullYear()}<br>`;
    }
    i++;
  }
  document.getElementById("ex7").innerHTML = text;
}

// ex8
function ex8() {
  const min = 1;
  const max = 10;
  let rand = Math.ceil(Math.random() * max);
  console.log(rand);
  let iNum = prompt(`Enter a number between ${min} and ${max} inclusive:`);

  if (iNum == rand) document.getElementById("ex8").innerHTML = "Matched";
  else document.getElementById("ex8").innerHTML = 
    `Not matched, the number was ${iNum}`
}

// ex9
function ex9() {
  let today = new Date();
  let christmas = new Date(today.getFullYear(), 11, 25);
  let one_date = 1000 * 3600 * 24;

  if (today.getMonth() == 11 && today.getDay > 25) 
    christmas.setFullYear(christmas.getFullYear() + 1);

  document.getElementById("ex9").innerHTML = 
    Math.floor((christmas.getTime() - today.getTime()) / one_date) + " days left until Christmas.";
}

// ex10
function ex10Multiply() {
  let a = document.getElementById("ex10-num1").value;
  let b = document.getElementById("ex10-num2").value;

  document.getElementById("ex10").innerHTML = "The result is: " + a * b;
}

function ex10Divide() {
  let a = document.getElementById("ex10-num1").value;
  let b = document.getElementById("ex10-num2").value;

  document.getElementById("ex10").innerHTML = "The result is: " + a / b;
}

