const electron = require('electron');
const MainWindow = require('./app/MainWindow');
const AppTray = require('./app/AppTray');

const { app, ipcMain } = electron;

app.on('ready',()=>{
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = `${__dirname}/src/assets/${iconName}`;
    appTray = new AppTray(iconPath, mainWindow);
});

ipcMain.on('sending-word', function(event, word){
    console.log(word);
});