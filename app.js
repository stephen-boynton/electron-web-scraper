const electron = require("electron");
const { app, BrowserWindow, Menu, ipcMain } = electron;
const request = require("request");

const { getData } = require("./scraper");
let mainWindow;
let htmlWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow({ title: "Web Scraper v0.5" });
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});

function addHTMLpreview() {
	console.log("creating new window");
	htmlWindow = new BrowserWindow({
		width: "500",
		height: "500",
		title: "Preview HTML"
	});
	htmlWindow.loadURL(`file://${__dirname}/files/temp/temp-page.txt`);
}

ipcMain.on("url", (event, http) => {
	getData(http).then(addHTMLpreview);
});
