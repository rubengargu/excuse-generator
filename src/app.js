/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Anibal Lecter", "Ronaldinho", "Robert Downey Jr", "A cat"];
  let action = ["ate", "broke", "make a paper plane", "cook"];
  let what = ["to my mom", "to my Ferrari", "to my Black Lotus", "to my bike"];
  let when = ["now", "three days ago", "yesterday", "in 476 A.C"];

  let number = Math.floor(Math.random() * who.length);
  let random = who[number];

  let number2 = Math.floor(Math.random() * action.length);
  let random2 = action[number2];

  let number3 = Math.floor(Math.random() * what.length);
  let random3 = what[number3];

  let number4 = Math.floor(Math.random() * when.length);
  let random4 = when[number4];
  document.getElementById("excuse").innerHTML =
    random + " " + random2 + " " + random3 + " " + random4;

  console.log("hola");
  console.log("Hello Rigo from the console!");
};
console.log("hola");
console.log("Hello Rigo from the console!");
