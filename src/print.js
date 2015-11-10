var program = require('commander');
var telnet = require('telnet-client');
var PRINTERS = require('./printers');
var moment = require('moment');
var log = require('loglevel');

// TODO: save configuration via nconf or similar?
// TODO: be able to refer to printers by name (to leverage storage of configuration)
// TODO: throw warnings when attempting to set fonts outside allowed bounds (and rounding is taking place)
// TODO: label template storage
// TODO: command chaining
// TODO: command wiring to label object

program
    .version('0.0.1')
    .option('-j, --json <parameters>', 'JSON description of printing parameters')
    .option('-v, --verbose', 'print useful information', (v, total) => (total === 0) ? 0 : total--, 2)
    .parse(process.argv);

var defaultPrinterModel = PRINTERS.ZEBRA_GX430T;
var defaultPrinter = Object.assign({
    name: 'Default Printer',
    address: '192.168.1.101',
}, defaultPrinterModel);
var defaultMedia = {
    width: 2 * 25.4,
    length: 1 * 25.4,
    // [thermal type]
    // [thickness?]
    // [price/label?]
    // [spool size]
    // [supply quantity]
    // [model / reorder number?]
};
var defaultLabel = {
    title: 'Hello world!',
    properties: {
        "date": moment().format(),
        "owner": ""
    },
    url: 'example.com/labels/HelloWorld'
    // label may also contain width/height (for continuous media)
};

if (program.json) {
    log.trace('Using provided JSON printing parameters');
    log.trace(`Provided parameters: ${JSON.stringify(program.json)}`);

    print(JSON.parse(program.json));
} else {
    log.trace('No printing parameters provided.  Printing a sample label...');
    print()
}

function print({printer = defaultPrinter, label = defaultLabel, media = defaultMedia} = {}) {

    log.info("Connecting to printer at " + printer.address + ':' + printer.port + "\n");

    var telnetParams = {
        host: printer.address,
        port: printer.port,
        //username: 'admin',
        password: printer.password
    };

    var cmd = buildCommand(label);

    log.debug("Command: "+cmd);

    var connection = new telnet();

    connection.on('connect', function(prompt) {
        connection.exec(cmd, {shellPrompt: ""}, function(response) {
            log.debug(response);
        });
    });

    connection.on('timeout', function() {
        log.error('socket timeout!');
        connection.end();
    });

    connection.on('close', function() {
        log.info('connection closed');
    });

    connection.connect(telnetParams);
}

function invalidParameterError(name, arg) {
    log.error("Invalid value for for parameter '" + name + "'");
}

// TODO: accept units (currently defaulting to inches)
function dots(l, printer = defaultPrinter) {
    return Math.round(l * printer.resolutionDPI);
}

function qrCodeCommand({text = null, errorCorrectionLevel = null, model = null, magnificationFactor = 5 /* default for 300dpi printers */, d = null, e =  null, inputMode = 'A', x = dots(1.4), y = null}) {
    if (text === null) return;

    // TODO Warn for invalid option values
    /* field position? */

    //if (!(model === 1 || model === 2))
    //    invalidParameterError('model', model);

    if (!(magnificationFactor >= 1 && magnificationFactor <= 10))
        invalidParameterError('magnificationFactor', magnificationFactor);

    //if (!(d === 'H' || d === 'Q' || d === 'M' || d === 'L'))
    //    invalidParameterError('d', d);
    //
    //if (!(e >= 1, e <= 7))
    //    invalidParameterError('e', e);

    return `^BQN,2,${magnificationFactor}\n` +
        '^FH\\' +
        '^FD'+inputMode+','+text+'^FS\n';
}

function buildCommand(label) {
    return '^XA\n'+
        // Nonprinting preamble
        '^LH'+dots(0.1)+','+dots(0.1)+
        // Title
        `^FO${dots(0.1)},0^ADN,${dots(0.120)},${dots(0.067)}^FD${label.title}^FS\n`+
        // QR Code
        `^FO0,${dots(0.15)}${qrCodeCommand({text: label.url})}`+
        // Properties
        `^FO${dots(0.6)},${dots(0.15)}^ADN,${dots(0.07)},${dots(0.035)}^FB${dots(1.6)},8`+
        '^FD'+Object.keys(label.properties).map((key) => key + ": " + label.properties[key]).join('\\&')+'^FS\n'+
        // URI
        `^FO${dots(0.1)},${dots(0.85)}^A0N,22,18,^FD${label.url}^FS\n`+ // ${dots(0.03)},${dots(0.015)}
        '^XZ\n';
}
