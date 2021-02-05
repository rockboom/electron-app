const {
    Menu,
    BrowserWindow
} = require('electron'); // Menu属于是 主线程下 的模块，所以只能在主线程中使用
let win = null;
var template = [
    {
        label:'四季',
        submenu:[
            {label:"春天",
            accelerator:"cmd+s", // 快捷键 cmd+s
            click:()=>{
                win = new BrowserWindow({
                    width:500,
                    height:500,
                    webPreferences:{nodeIntegration:true}
                })
                win.loadFile('red.html');
                win.on('close',()=>{
                    win = null;
                })
            }},
            {label:"夏天"},
            {label:"秋天"},
            {label:"冬天"},
        ]
    },
    {
        label:"一周",
        submenu:[
            {label:"星期一"},
            {label:"星期二"},
            {label:"星期三"},
            {label:"星期四"},
            {label:"星期五"},
            {label:"星期六"},
            {label:"星期日"},
        ]
    }
]
console.log("引入menu");
var menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);