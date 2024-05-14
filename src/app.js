/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html"
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomExcuse(){
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  const randomWho=who[Math.floor(Math.random() * who.length)];
  const randomAction=action[Math.floor(Math.random() * action.length)];
  const randomWhat=what[Math.floor(Math.random() * what.length)];
  const randomWhen=when[Math.floor(Math.random()*when.lenght)];
  const excuse=`${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  return excuse;
}
window.onload = () => {
 const button = document.querySelector("#excusebutton");
 const p=document.querySelector("#excuse");
 button.onclick=()=> {
  p.innerHTML=generateRandomExcuse();
 };
};
