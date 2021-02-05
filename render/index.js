const {remote} = require('electron');
const rightTemplate = [
    {label:"粘贴"},
    {label:"复制"},
]

const menu = remote.Menu.buildFromTemplate(rightTemplate); 
window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    menu.popup({window:remote.getCurrentWindow()});
},false);