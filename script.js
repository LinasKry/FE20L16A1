"use strict";
var bpl1 = document.getElementById("bpl1");
var bpl2 = document.getElementById("bpl2");
var rez1 = document.getElementById("rez1");
rez1.innerHTML = 0;
var rez2 = document.getElementById("rez2");
rez2.innerHTML = 0;
var inp = document.getElementById("inp");
//console.log(inp.value);
var maxn = inp.value;

var lmt = document.getElementsByTagName("h2")[1];
lmt.innerText = maxn;
lmt.classList.add("lmtStyle");

// Reset to 0
const handleReset = () => {
  rez1.innerHTML = 0;
  rez2.innerHTML = 0;
  pl1num = 0;
  bpl1.disabled = false;
  pl2num = 0;
  bpl2.disabled = false;
  rez1.classList.remove("rezStyle");
  rez2.classList.remove("rezStyle");
  bpl1.classList.remove("bplStyle");
  bpl1.innerText = "Pirmas žaidėjas";
  bpl2.classList.remove("bplStyle");
  bpl2.innerHTML = "Antras žaidėjas";

  var inp = document.getElementById("inp");
  //console.log(inp.value);
  var maxn = inp.value;
  //console.log(maxn);
  var lmt = document.getElementsByTagName("h2")[1];
  lmt.innerText = maxn;
  lmt.classList.add("lmtStyle");
};
res.addEventListener("click", handleReset);

//1 zaidejas
var maxn = inp.value;

//alert(inp.value);
console.log(maxn);
var pl1num = 0;
var handleIncrement1 = () => {
  pl1num++;
  var maxn = inp.value;
  if (maxn <= pl1num) {
    bpl1.disabled = true;
    rez1.classList.add("rezStyle");
    bpl1.classList.add("bplStyle");
    bpl1.innerText = "WINNER";
    bpl2.disabled = true;
  }
  rez1.innerHTML = pl1num;
  //console.log(pl1num);
};
bpl1.addEventListener("click", handleIncrement1);

// 2 zaidejas

var pl2num = 0;
var handleIncrement2 = () => {
  pl2num++;
  var maxn = inp.value;
  if (maxn <= pl2num) {
    bpl2.disabled = true;
    rez2.classList.add("rezStyle");
    bpl2.classList.add("bplStyle");
    bpl2.innerHTML = "WINNER";
    bpl1.disabled = true;
  }

  rez2.innerHTML = pl2num;
};
bpl2.addEventListener("click", handleIncrement2);
