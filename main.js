const {
	app,
	BrowserWindow
} = require('electron')
const path = require('path')

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 600,
		titleBarStyle: "hiddenInset",
		frame: false,
		resizable: false,
		center: true
	});

	mainWindow.loadFile('index.html');
	// mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function () {
		mainWindow = null
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
	if (mainWindow === null) createWindow()
});