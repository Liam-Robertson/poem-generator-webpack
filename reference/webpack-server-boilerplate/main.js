const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        }
      });
      win.maximize();
      win.show();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html', 'index.html'),
        protocol: 'file', 
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

// For windows machine
app.on('ready', createWindow);

