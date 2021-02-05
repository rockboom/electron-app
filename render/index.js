const btn = document.getElementById('btn');
// 渲染进程中使用主进程中的模块方法时，可以使用Remote解决在渲染和主进程间的通讯
const BrowserWindow = require('electron').remote.BrowserWindow;
let newWin = null;
window.onload = function (){
    btn.onclick = function (){
        newWin = new BrowserWindow({
            width:500,
            height:500
        })
        newWin.loadFile('red.html');
        newWin.on('close',()=>{
            newWin = null;
        })
    }
};