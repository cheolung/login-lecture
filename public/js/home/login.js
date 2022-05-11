"use strict";

const uid = document.querySelector("#uid"),
    pwd = document.querySelector("#pwd"),
    btn = document.querySelector("#loginbt");

btn.addEventListener("click", login);

function login(){
   const req = {
       uid: uid.value,
       pwd: pwd.value
   };
   alert(uid.value);
}gi