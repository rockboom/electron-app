const {
    app,
    BrowserWindow,
    BrowserViews,
    BrowserView
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
    // mainWindow.webContents.openDevTools();
    // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; //消除控制台上报警文字
    const viewWindow = new BrowserView();
    mainWindow.setBrowserView(viewWindow);
    viewWindow.setBounds({
        x: 0,
        y: 150,
        width: 600,
        height: 600
    });
    viewWindow.webContents.loadURL('https://www.baidu.com');
    mainWindow.on('close',()=>{
        mainWindow = null;
    })
})