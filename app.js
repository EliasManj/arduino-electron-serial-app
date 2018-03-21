const electron = require('electron');
const SerialPort = require('serialport');
const MainWindow = require('./app/MainWindow');
const AppTray = require('./app/AppTray');

const { app, ipcMain } = electron;
let serialState;
let serialString;
let port = new SerialPort('COM8', {
    baudRate: 9600
  });

app.on('ready',()=>{
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = `${__dirname}/src/assets/${iconName}`;
    appTray = new AppTray(iconPath, mainWindow);
});

ipcMain.on('toggle-event', function(event, device, state){
    serialString = `${device}:${state}`
    console.log(serialString);
    port.write(serialString, function(err) {
        if (err) {
          return console.log('Error on write: ', err.message);
        }
        console.log('message written');
      });
});