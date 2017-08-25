const electron = require("electron");
const { app, BrowserWindow, Menu, ipcMain } = electron;
let mainWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow({ title: "Web Scraper v0.5" });
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
