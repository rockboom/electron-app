const {
    app,
    BrowserWindow,
    globalShortcut
} = require('electron');
let mainWindow = null;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:600,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            
            enableRemoteModule:true
        }
    });
    globalShortcut.register('cmd+y', () => {
        mainWindow.loadURL('https://www.baidu.com')
    })
    globalShortcut.register('cmd+z', () => {
        mainWindow.loadFile('./index.html')
    })
    mainWindow.loadFile('index.html');
    mainWindow.on('close',()=>{
        mainWindow = null;
    })
})