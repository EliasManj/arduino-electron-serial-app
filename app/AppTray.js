const electron = require('electron');

const { Tray, Menu, app } = electron;

class AppTray extends Tray{
    
    constructor(iconPath, mainWindow){
        super(iconPath);
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
    }

    onClick(event, bounds){
        const { x, y } = bounds;
        const { height, width } = this.mainWindow.getBounds();
        if (this.mainWindow.isVisible()) {
          this.mainWindow.hide();
        } else {
          const yPosition = process.platform === 'darwin' ? y : y - height;
          this.mainWindow.setBounds({
            x: x - width / 2,
            y: yPosition,
            height,
            width
          });
          this.mainWindow.show();
        }
    }

    onRightClick(){
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit()
            },
            {
                label: 'Show',
                click: () => this.mainWindow.show()
            }
        ]);
        this.popUpContextMenu(menuConfig);
    }

}

module.exports = AppTray;