const fs = require('fs');
const btn = document.getElementById('btn');
const food = document.getElementById('food');
// const btn = this.document.querySelector('#btn')
// const food = this.document.querySelector('#food')
window.onload = function (){
    btn.onclick = function (){
        fs.readFile('food.txt',(err,data)=>{
            food.innerHTML = data;
        })
    }
};