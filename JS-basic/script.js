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
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  if (a == "" || b == "" || c == "") document.getElementById("ex4").innerHTML = "Fill triangle's sides first!";
  let s = ((parseInt(a) + parseInt(b) + parseInt(c)) / 2);
  document.getElementById("ex4").innerHTML = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}