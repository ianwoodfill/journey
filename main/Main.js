const { app, BrowserWindow, ipcMain } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ 
    width: 800,
    height: 600,
    minHeight: 450,
    minWidth: 650,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  })

  // and load the index.html of the app.
  win.loadURL('http://localhost:3000/')

  win.on('closed', () => {  
    win = null
  })
}

function init(){
  createWindow();
}

app.on('ready', init)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})