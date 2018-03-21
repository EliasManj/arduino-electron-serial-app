const electron = require('electron');

const {
    ipcRenderer
} = electron;


function sendToggle(bool, device) {
    console.log(ipcRenderer);
    if(bool){
        state = 'ON';
    } else {
        state = 'OFF';
    }
    ipcRenderer.send('toggle-event', device, state);
}

$(document).ready(function () {
    $('#lights').bootstrapToggle('off');
    $('#fan').bootstrapToggle('off');
    $('#door').bootstrapToggle('off');
    $("#lights").change(function () {
        sendToggle($(this).prop('checked'), 'LED');
    });

    $("#door").change(function () {
        sendToggle($(this).prop('checked'), 'DOOR');
    });

    $("#fan").change(function () {
        sendToggle($(this).prop('checked'), 'FAN');
    });
});