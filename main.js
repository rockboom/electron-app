const {
    app,
    BrowserWindow
} = require('electron');
let mainWindow = null;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:600,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            
            // enableRemoteModule:true
        }
    });
    console.log("main.js");
    require('./menu');
    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools();
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //消除控制台上报警文字
    mainWindow.on('close',()=>{
        mainWindow = null;
    })
})