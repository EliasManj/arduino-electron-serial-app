const electron = require('electron');

const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow{
    constructor(url){
        super({
            height: 500,
            width: 300,
            movable: true,
            resizable: true,
            show: true,
            webPreferences: {backgroundThrottling: false}
        });
        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur() {
        this.hide();
      }

}

module.exports = MainWindow;

