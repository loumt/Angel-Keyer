const { app, BrowserWindow } = require('electron')
const robotjs = require('robotjs')

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.on('ready', createWindow)