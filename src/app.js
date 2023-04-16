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

  let who2=["Lionel Messi", "Nicolas Tesla", "Richard Garfield", "Bloody Mary"];
  let action2=["killed","play", "cooked", "slept with"];
  let what2 =["my dog", "a plane", "a football supporter", "a board ganme"];
  let when=["when you was sleeping", "last week","during Christmas", "in Saint George"];

  let number5 = Math.floor(Math.random() * who2.length);
  let random5 = who[number5];

  let number6 = Math.floor(Math.random() * action2.length);
  let random6 = action[number6];

  let number7 = Math.floor(Math.random() * what2.length);
  let random7 = what[number7];

  let number8 = Math.floor(Math.random() * when2.length);
  let random8 = when[number8];
  document.getElementById("excuse2").innerHTML =
  random5 + " " + random6 + " " + random7 + " " + random8;
  document.getElementById(random5).innerHTML=random5 +" ...";
  document.getElementById(random6).innerHTML=random5 +" ...";
  document.getElementById(random7).innerHTML=random5 +" ...";
  document.getElementById(random8).innerHTML=random5 +" ...";
  


