const {shell} = require('electron');
let aHref = document.getElementById('aHref');
aHref.onclick = function (e){
    e.preventDefault();
    var href = this.getAttribute('href');
    shell.openExternal(href);
}