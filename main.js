const electron = require('electron');
const {app, BrowserWindow} = require('electron');

app.on("ready", () =>{
    indexWindow = new BrowserWindow({
        webPreferences:{
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true
        },
        width: 1224,
        height: 600,
        title: "Program Kasir Sulis 1801010050"
    });
  
    indexWindow.loadURL(`file://${__dirname}/store.html`);
    indexWindow.on("closed", ()=>{
        app.quit();
        indexWindow = null;
    });
    
  });

  /**
function createWindow () {
    const mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,

            preload: path.join(__dirname, 'preload.js')

        },
        width: 1224,
        height: 600,
        title: "Program Kasir Sulis 1801010050"
    });

    mainWindow.loadFile('store.html');
}

/**
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})
*/