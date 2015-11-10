'use strict';

var telnet = require('telnet-client');
var PRINTERS = require('./printers');

var printer = PRINTERS.ZEBRA_GX430T;

// TODO: consider

function invalidParameterError(name, arg) {
    console.log('Invalid value for for parameter \'' + name + '\'');
}

// TODO: accept units (currently defaulting to inches)
function dots(l) {
    return Math.round(l * printer.resolutionDPI);
}

function qrCodeCommand(_ref) {
    var _ref$text = _ref.text;
    var text = _ref$text === undefined ? null : _ref$text;
    var _ref$errorCorrectionLevel = _ref.errorCorrectionLevel;
    var errorCorrectionLevel = _ref$errorCorrectionLevel === undefined ? null : _ref$errorCorrectionLevel;
    var _ref$model = _ref.model;
    var model = _ref$model === undefined ? null : _ref$model;
    var _ref$magnificationFactor = _ref.magnificationFactor;
    var magnificationFactor = _ref$magnificationFactor === undefined ? null : _ref$magnificationFactor;
    var _ref$d = _ref.d;
    var d = _ref$d === undefined ? null : _ref$d;
    var _ref$e = _ref.e;
    var e = _ref$e === undefined ? null : _ref$e;
    var _ref$inputMode = _ref.inputMode;
    var inputMode = _ref$inputMode === undefined ? 'A' : _ref$inputMode;

    if (text === null) return;

    // TODO Warn for invalid option values
    /* field position? */

    //if (!(model === 1 || model === 2))
    //    invalidParameterError('model', model);
    //
    //if (!(magnificationFactor >= 1 && magnificationFactor <= 10))
    //    invalidParameterError('magnificationFactor', magnificationFactor);
    //
    //if (!(d === 'H' || d === 'Q' || d === 'M' || d === 'L'))
    //    invalidParameterError('d', d);
    //
    //if (!(e >= 1, e <= 7))
    //    invalidParameterError('e', e);

    return label.qr_code == null ? '' : '^BQ' + '^FD' + inputMode + ',' + text + '^FS';
}

function buildCommand(label) {
    return '^XA' + '^FO50,50^ADN,36,20^FDErik Anderson^FS' + qrCodeCommand({ text: label.qr_code }) + '^XZ';
    //'^PW'+dots(1.5)+
    //    '^LH'+dots(0.1)+','+dots(0.1)+
    //    ""
}

var printParams = {
    printer: {
        address: '192.168.1.122',
        port: printer.default_port,
        dpi: printer.resolutionDPI
    },
    label: {
        width: 1.5 * 25.4,
        length: 1 * 25.4,
        text: '',
        qr_code: 'www.tc.umn.edu/~ande7564'
    }
};

console.log('Connecting to printer at ' + printParams.printer.address + ':' + printParams.printer.port + '\n');

var telnetParams = {
    host: printParams.printer.address,
    port: printParams.printer.port,
    shellPrompt: '/ # ',
    timeout: 1500
    // removeEcho: 4
};

var cmd = buildCommand(printParams.label);

console.log('Command: ' + cmd);

var connection = new telnet();

connection.on('ready', function (prompt) {
    connection.exec(cmd, function (response) {
        console.log(response);
    });
});

connection.on('timeout', function () {
    console.log('socket timeout!');
    connection.end();
});

connection.on('close', function () {
    console.log('connection closed');
});

connection.connect(telnetParams);

//# sourceMappingURL=print-compiled.js.map