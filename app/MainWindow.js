const electron = require('electron');

const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow{
    constructor(url){
        super({
            height: 380,
            width: 250,
            frame: false,
            movable: false,
            resizable: false,
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

