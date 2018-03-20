const electron = require('electron');

const {
    ipcRenderer
} = electron;

console.log('dfs');

function sendToggle(bool, device) {
    ipcRenderer.send('toogleEvent', device, bool);
}


$(document).ready(function () {
    $("#lights").change(function () {
        sendToggle($(this).prop('checked'), 'lights');
    });

    $("#door").change(function () {
        sendToggle($(this).prop('checked'), 'door');
    });

    $("#fan").change(function () {
        sendToggle($(this).prop('checked'), 'fan');
    });
});