var program = require('commander');
var telnet = require('telnet-client');
var PRINTERS = require('./printers');
var moment = require('moment');
var log = require('loglevel');
var Label = require('./label');

// TODO: save configuration via nconf or similar?
// TODO: be able to refer to printers by name (to leverage storage of configuration)
// TODO: throw warnings when attempting to set fonts outside allowed bounds (and rounding is taking place)
// TODO: label template storage
// TODO: command chaining
// TODO: command wiring to label object
// TODO: label may also contain width/height (for continuous media)

program
    .version('0.0.1')
    .option('-c, --content <content>', 'label content as JSON')
    .option('-j, --json <parameters>', 'JSON description of printing parameters')
    .option('-v, --verbose', 'ouput useful information', (v, total) => (total === 0) ? 0 : total-1, 2)
    .option('-t, --test', 'print a test label')
    .option('-c, --check', 'dry-run; do not send label to printer')
    .parse(process.argv);

console.log('loglevel: '+program.verbose);
log.setLevel(program.verbose);

var defaultPrinterModel = PRINTERS.ZEBRA_GX430T;
var defaultPrinter = Object.assign({
    name: 'Default Printer',
    address: '192.168.1.14'
}, defaultPrinterModel, program.json && program.json.printer);
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

var labels = {
    "test": {
        defaultContent: {
            title: 'Hello world!',
            properties: {
                "date": moment().format(),
                "owner": ""
            },
            url: 'example.com/labels/HelloWorld'
        },
        template: qrWithProperties
    }
};

if (program.test) {
    log.info('Printing a test label...');
    print();
} else if (program.json) {
    log.trace('Using provided JSON printing parameters');
    log.trace(`Provided parameters: ${JSON.stringify(program.json)}`);

    print(JSON.parse(program.json));
} else {
    log.error('No label content provided');
}


function print({printer = defaultPrinter, template = labels.test.template, content = labels.test.defaultContent, media = defaultMedia} = {}) {

    if (typeof template === "string" && template in labels)
        template = labels[template].template;

    log.info("Connecting to printer at " + printer.address + ':' + printer.port + "\n");

    var telnetParams = {
        host: printer.address,
        port: printer.port,
        //username: 'admin',
        password: printer.password
    };

    var label = template(content);
    var cmd = label.text;

    log.debug("Command: "+cmd);
    console.log('program keys: '+ JSON.stringify(Object.keys(program)));
    if (program.check) {
        log.info('dry-run; exiting...');
        process.exit(0);
    }

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

function basicTemplate() {
    return new Label()
        .fieldOrigin(dots(0.1),0, 0)
        .setFont('D','N',dots(0.120),dots(0.067))
        .fieldData("Test Label")
        .end();
}

function qrWithProperties(label) {
    return new Label()
        .labelHome(dots(0.1),dots(0.1))
        // Title
        .fieldOrigin(dots(0.1),0, 0)
        .setFont('D','N',dots(0.120),dots(0.067))
        .fieldData(label.title)
        // QR Code
        .fieldOrigin(0,dots(0.15))
        .raw(qrCodeCommand({text: label.url}))
        // Properties
        .fieldOrigin(dots(0.6),dots(0.15))
        .setFont('D','N',dots(0.07),dots(0.035))
        .fieldBlock(dots(1.6),8)
        .fieldData(Object.keys(label.properties).map((key) => key + ": " + label.properties[key]).join('\\&'))
        // URI
        .fieldOrigin(dots(0.1),dots(0.85))
        .setFont('0','N',22,18)
        .fieldData(label.url)
        .end()
}
