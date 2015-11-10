"use strict";

// TODO: enable chaining of commands to allow more 'native' use of ZPL?

// TODO: consider allowing parameter aliases (both the name and the label in the documentation)

module.exports = [
    {
        command: '^A',
        arguments: ['font','height','width'],
        description: 'Set font for current field',
        fn: () => '^A'
    },
    {
        command: '^A@',
        arguments: ['orientation, height, width, path'],
        description: 'Use font name to call font'
    },
    {
        command: '^B1',
        arguments: ['orientation, checkDigit, height, intLine, intLineAbove'],
        description: 'Code 11 bar code'
    },
    {
        command: '^B2',
        arguments: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'Interleaved 2 of 5 bar code'
    },
    {
        command: '^B3',
        arguments: 'orientation, checkDigit, height, intLine, intLineAbove',
        description: 'Code 39 bar code'
    },
    {
        command: '^B4',
        arguments: 'orientation, heightMultiplier, intLine, mode',
        description: 'Code 49 bar code'
    },
    {
        command: '^B5',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'Planet Code bar code'
    },
    {
        command: '^B7',
        arguments: 'orientation, rowHeight, security, columns, rows, truncate',
        description: 'PDF417 bar code'
    },
    {
        command: '^B8',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'EAN-8 bar code'
    },
    {
        command: '^B9',
        arguments: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'UPC-E bar code'
    },
    {
        command: '^BA',
        arguments: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'Code 93 bar code'
    },
    {
        command: '^BB',
        arguments: 'orientation, height, security, columns, rows, mode',
        description: 'Codablock bar code'
    },
    {
        command: '^BC',
        arguments: 'orientation, height, intLine, intLineAbove, checkDigit, mode',
        description: 'Code 128 bar code (modes N, U and A only); UCC check digit not supported)'
    },
    {
        command: '^BD',
        arguments: 'mode, position, total',
        description: 'UPS MaxiCode bar code'
    },
    {
        command: '^BE',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'EAN-13 bar code'
    },
    {
        command: '^BF',
        arguments: 'orientation, height, mode',
        description: 'Micro-PDF417 bar code'
    },
    {
        command: '^BI',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'Industrial 2 of 5 bar code'
    },
    {
        command: '^BJ',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'Standard 2 of 5 bar code'
    },
    {
        command: '^BK',
        arguments: 'orientation, checkDigit, height, intLine, intLineAbove, startChar, stopChar',
        description: 'ANSI Codabar bar code'
    },
    {
        command: '^BL',
        arguments: 'orientation, height, intLineAbove',
        description: 'LOGMARS bar code'
    },
    {
        command: '^BM',
        arguments: 'orientation, checkDigitType, height, intLine, intLineAbove, checkDigit',
        description: 'MSI bar code'
    },
    {
        command: '^BO',
        arguments: 'orientation, magnification, ecic, err, menuSymbol, symbols, id',
        description: 'Aztec bar code'
    },
    {
        command: '^BP',
        arguments: 'orientation, checkDigit, height, intLine, intLineAbove',
        description: 'Plessey bar code'
    },
    {
        command: '^BQ',
        arguments: 'position, model, magnification, hqml, nabk',
        description: 'QR code bar code'
    },
    {
        command: '^BR',
        arguments: 'orientation, symbology, magnification, separatorHeight, height, segmentWidth',
        description: 'RSS bar code'
    },
    {
        command: '^BS',
        arguments: 'orientation, height, intLine, intLineAbove',
        description: 'UPC/EAN extension'
    },
    {
        command: '^BT',
        arguments: 'orientation, width, widthRatio, height, narrowWidth, rowHeight',
        description: 'TLC39 bar code'
    },
    {
        command: '^BU',
        arguments: 'orientation, height, intLine, intLineAbove, printCheckDigit',
        description: 'UPC-A bar code'
    },
    {
        command: '^BX',
        arguments: 'orientation, height, quality, columns, rows, format, escape',
        description: 'Data matrix bar code (quality 200 only)'
    },
    {
        command: '^BY',
        arguments: 'width, widthRatio, height',
        description: 'Bar code field defaults'
    },
    {
        command: '^BZ',
        arguments: 'orientation, height, intLine, intLineAbove, type',
        description: 'Postal bar code'
    },
    {
        command: ['^CC', '~CC'],
        arguments: 'char',
        description: 'Change caret'
    },
    {
        command: ['^CD', '~CD'],
        arguments: 'char',
        description: 'Change delimiter'
    },
    {
        command: '^CF',
        arguments: 'fontName, height, width',
        description: 'Change default font'
    },
    {
        command: '^CI',
        arguments: 'charset, src1, dest1, src2, dest2, ...',
        description: 'Change international font (charsets 0-13, 27, 28, 31, 33-36 only)'
    },
    {
        command: '^CM',
        arguments: 'memoryDevice, memoryDevice, memoryDevice, memoryDevice',
        description: 'Change memory letter designation'
    },
    {
        command: '^CO',
        arguments: 'on, memory, type',
        description: 'Cache on'
    },
    {
        command: '^CT',
        arguments: 'char',
        description: 'Change tilde (alternate command: ~CT)'
    },
    {
        command: '^CV',
        arguments: 'validation',
        description: 'Code validation'
    },
    {
        command: '^CW',
        arguments: 'fontName, path',
        description: 'Set font identifier'
    },
    {
        command: '~DB',
        arguments: 'path, orientation, maxHeight, maxWidth, base, space, chars, copyright, data',
        description: 'Download bitmap font'
    },
    {
        command: '~DE',
        arguments: 'path, tableSize, data',
        description: 'Download encoding'
    },
    {
        command: '^DF',
        arguments: 'path',
        description: 'Download format'
    },
    {
        command: '~DG',
        arguments: 'path, totalBytes, rowBytes, data',
        description: 'Download graphics'
    },
    {
        command: '~DN',
        arguments:'',
        description: 'Abort download graphics'
    },
    {
        command: '~DS',
        arguments: 'path, size, data',
        description: 'Download scalable font'
    },
    {
        command: '~DT',
        arguments: 'path, size, data',
        description: 'Download TrueType font'
    },
    {
        command: '~DU',
        arguments: 'path, size, data',
        description: 'Download unbounded TrueType font'
    },
    {
        command: '~DY',
        arguments: 'path, format, extension, totalBytes, rowBytes, data',
        description: 'Download objects (extensions G, B, P and T only)'
    },
    {
        command: '~EG',
        arguments:'',
        description: 'Erase all graphics (alternate command: ^EG)'
    },
    {
        command: '^FB',
        arguments: 'maxWidth, maxLines, lineSpacing, alignment, hangingIndent',
        description: 'Field block'
    },
    {
        command: '^FC',
        arguments: 'indicator1, indicator2, indicator3',
        description: 'Field clock'
    },
    {
        command: '^FD',
        arguments: 'data',
        description: 'Field data'
    },
    {
        command: '^FH',
        arguments: 'hexIndicator',
        description: 'Field hexadecimaml indicator'
    },
    {
        command: '^FL',
        arguments: 'extensionPath, basePath, link',
        description: 'Font link'
    },
    {
        command: '^FM',
        arguments: 'x1, y2, x2, y2, ...',
        description: 'Field multiple origin locations'
    },
    {
        command: '^FN',
        arguments: 'fieldNumber',
        description: 'Field number'
    },
    {
        command: '^FO',
        arguments: 'x, y',
        description: 'Field origin'
    },
    {
        command: '^FP',
        arguments: 'direction, characterSpacing',
        description: 'Field parameter'
    },
    {
        command: '^FR',
        arguments:'',
        description: 'Field reverse print'
    },
    {
        command: '^FS',
        arguments:'',
        description: 'Field separator (alternate command: 0x0F)'
    },
    {
        command: '^FT',
        arguments: 'x, y',
        description: 'Field typeset'
    },
    {
        command: '^FV',
        arguments: 'data',
        description: 'Field variable'
    },
    {
        command: '^FW',
        arguments: 'orientation',
        description: 'Field orientation'
    },
    {
        command: '^FX',
        arguments: 'comment',
        description: 'Comment'
    },
    {
        command: '^GB',
        arguments: 'width, height, thickness, color, rounding',
        description: 'Graphic box'
    },
    {
        command: '^GC',
        arguments: 'diameter, thickness, color',
        description: 'Graphic circle'
    },
    {
        command: '^GD',
        arguments: 'width, height, thickness, color, orientation',
        description: 'Graphic diagonal line'
    },
    {
        command: '^GE',
        arguments: 'width, height, thickness, color',
        description: 'Graphic ellipse'
    },
    {
        command: '^GF',
        arguments: 'format, dataBytes, totalBytes, rowBytes, data',
        description: 'Graphic field'
    },
    {
        command: '^GS',
        arguments: 'orientation, height, width',
        description: 'Graphic symbol'
    },
    {
        command: '~HB',
        arguments:'',
        description: 'Battery status'
    },
    {
        command: '~HD',
        arguments:'',
        description: 'Head diagnostic'
    },
    {
        command: '^HF',
        arguments: 'path',
        description: 'Host format'
    },
    {
        command: '^HG',
        arguments: 'path',
        description: 'Host graphic'
    },
    {
        command: '^HH',
        arguments:'',
        description: 'Configuration label return'
    },
    {
        command: '~HI',
        arguments:'',
        description: 'Host identification'
    },
    {
        command: '~HM',
        arguments:'',
        description: 'Host RAM status'
    },
    {
        command: '~HS',
        arguments:'',
        description: 'Host status return'
    },
    {
        command: '~HU',
        arguments:'',
        description: 'Host alert configuration'
    },
    {
        command: '^HV',
        arguments:'',
        description: 'Host verification'
    },
    {
        command: '^HW',
        arguments: 'path',
        description: 'Host directory list'
    },
    {
        command: '^HY',
        arguments: 'path',
        description: 'Upload graphics'
    },
    {
        command: '^HZ',
        arguments: 'param',
        description: 'Display description information'
    },
    {
        command: '^ID',
        arguments: 'path',
        description: 'Delete object'
    },
    {
        command: '^IL',
        arguments: 'path',
        description: 'Image load'
    },
    {
        command: '^IM',
        arguments: 'path',
        description: 'Image move'
    },
    {
        command: '^IS',
        arguments: 'path, print',
        description: 'Image save'
    },
    {
        command: '~JA',
        arguments:'',
        description: 'Cancel all'
    },
    {
        command: '^JB',
        arguments: 'device',
        description: 'Initialize flash memory'
    },
    {
        command: '~JB',
        arguments:'',
        description: 'Reset optional memory'
    },
    {
        command: '~JC',
        arguments:'',
        description: 'Set media sensor calibration'
    },
    {
        command: '~JD',
        arguments:'',
        description: 'Enable communications diagnostics'
    },
    {
        command: '~JE',
        arguments:'',
        description: 'Disable communications diagnostics'
    },
    {
        command: '~JF',
        arguments: 'pause',
        description: 'Set battery condition'
    },
    {
        command: '~JG',
        arguments:'',
        description: 'Graphing sensor calibration'
    },
    {
        command: '^JJ',
        arguments: 'opMode, appMode, printSignalMode, errorMode, reprintMode, ribbonMode',
        description: 'Set auxiliary port'
    },
    {
        command: '~JL',
        arguments:'',
        description: 'Set label length'
    },
    {
        command: '^JM',
        arguments: 'adjustment',
        description: 'Set print density'
    },
    {
        command: '~JN',
        arguments:'',
        description: 'Head test fatal'
    },
    {
        command: '~JO',
        arguments:'',
        description: 'Head test not fatal'
    },
    {
        command: '~JP',
        arguments:'',
        description: 'Pause and cancel format'
    },
    {
        command: '~JR',
        arguments:'',
        description: 'Power on reset'
    },
    {
        command: '^JS',
        arguments: 'sensor',
        description: 'Sensor select'
    },
    {
        command: '~JS',
        arguments: 'sequence',
        description: 'Change backfeed sequence'
    },
    {
        command: '^JT',
        arguments: 'labels, manualSelection, first, last',
        description: 'Head test interval'
    },
    {
        command: '^JU',
        arguments: 'configuration',
        description: 'Configuration update'
    },
    {
        command: '^JW',
        arguments: 'tension',
        description: 'Set ribbon tension'
    },
    {
        command: '~JX',
        arguments:'',
        description: 'Cancel current format'
    },
    {
        command: '^JZ',
        arguments: 'reprint',
        description: 'Reprint after error'
    },
    {
        command: '~KB',
        arguments:'',
        description: 'Kill battery'
    },
    {
        command: '^KD',
        arguments: 'format',
        description: 'Select date and time format'
    },
    {
        command: '^KL',
        arguments: 'language',
        description: 'Select language'
    },
    {
        command: '^KN',
        arguments: 'name, description',
        description: 'Set printer name'
    },
    {
        command: '^KP',
        arguments: 'password',
        description: 'Set password'
    },
    {
        command: '^LF',
        arguments:'',
        description: 'List font links'
    },
    {
        command: '^LH',
        arguments: 'x, y',
        description: 'Label home'
    },
    {
        command: '^LL',
        arguments: 'length',
        description: 'Label length'
    },
    {
        command: '^LR',
        arguments: 'reverse',
        description: 'Label reverse print'
    },
    {
        command: '^LS',
        arguments: 'shift',
        description: 'Label shift'
    },
    {
        command: '^LT',
        arguments: 'top',
        description: 'Label top'
    },
    {
        command: '^MC',
        arguments: 'clear',
        description: 'Map clear'
    },
    {
        command: '^MD',
        arguments: 'darknessModifier',
        description: 'Modify darkness'
    },
    {
        command: '^MF',
        arguments: 'powerupAction, closingAction',
        description: 'Media feed'
    },
    {
        command: '^ML',
        arguments: 'maxLength, maxLogicalPaper, maxPhysicalPaper, maxRibbon',
        description: 'Max label length'
    },
    {
        command: '^MM',
        arguments: 'mode, prepeel',
        description: 'Print mode'
    },
    {
        command: '^MN',
        arguments: 'media',
        description: 'Media tracking'
    },
    {
        command: '^MP',
        arguments: 'mode',
        description: 'Mode protection'
    },
    {
        command: '^MT',
        arguments: 'mediaType',
        description: 'Media type'
    },
    {
        command: '^MU',
        arguments: 'units, baseDpi, dpiConversion',
        description: 'Set units of measurement'
    },
    {
        command: '^MW',
        arguments: 'enable',
        description: 'Modify head cold warning'
    },
    {
        command: '~NC',
        arguments: 'networkId',
        description: 'Network connect'
    },
    {
        command: '^NI',
        arguments: 'networkId',
        description: 'Network ID number'
    },
    {
        command: '~NR',
        arguments:'',
        description: 'Set all network printers transparent'
    },
    {
        command: '^NS',
        arguments: 'setting, ip, subnetMask, gateway',
        description: 'Change network settings'
    },
    {
        command: '~NT',
        arguments:'',
        description: 'Set current printer transparent'
    },
    {
        command: '^PA',
        arguments: 'defaultGlyph, bidi, charShaping, openTypeSupport',
        description: 'Advanced text properties'
    },
    {
        command: '^PF',
        arguments: 'rows',
        description: 'Slew rows'
    },
    {
        command: '^PH',
        arguments:'',
        description: 'Slew to home position (alternate command: ~PH)'
    },
    {
        command: '^PM',
        arguments: 'mirror',
        description: 'Print mirror image'
    },
    {
        command: '^PO',
        arguments: 'orientation',
        description: 'Print orientation'
    },
    {
        command: '^PP',
        arguments:'',
        description: 'Programmable pause (alternate command: ~PP)'
    },
    {
        command: '^PQ',
        arguments: 'labels, labelsBetweenPauses, replicates, noPause, cutOnError',
        description: 'Print quantity'
    },
    {
        command: '^PR',
        arguments: 'printSpeed, slewSpeed, backfeedSpeed',
        description: 'Print rate'
    },
    {
        command: '~PR',
        arguments:'',
        description: 'Applicator reprint'
    },
    {
        command: '~PS',
        arguments:'',
        description: 'Print start'
    },
    {
        command: '^PW',
        arguments: 'width',
        description: 'Print width'
    },
    {
        command: '~RO',
        arguments: 'counter',
        description: 'Reset counter'
    },
    {
        command: '^SC',
        arguments: 'baud, wordLength, parity, stopBits, protocolMode, protocol',
        description: 'Set serial communications'
    },
    {
        command: '~SD',
        arguments: 'darkness',
        description: 'Set darkness'
    },
    {
        command: '^SE',
        arguments: 'path',
        description: 'Select encoding'
    },
    {
        command: '^SF',
        arguments: 'mask, increment',
        description: 'Serialized field'
    },
    {
        command: '^SL',
        arguments: 'mode, language',
        description: 'Set RTC mode and language'
    },
    {
        command: '^SN',
        arguments: 'start, increment, pad',
        description: 'Serialized data'
    },
    {
        command: '^SO',
        arguments: 'clock, months, days, years, hours, minutes, seconds',
        description: 'Set RTC offset'
    },
    {
        command: '^SP',
        arguments: 'row',
        description: 'Start print'
    },
    {
        command: '^SQ',
        arguments: 'condition, destination, halt',
        description: 'Halt alert'
    },
    {
        command: '^SR',
        arguments: 'resistance',
        description: 'Set printhead resistance'
    },
    {
        command: '^SS',
        arguments: 'web, media, ribbon, length, intensity1, intensity2, sensing, mediaSensing, ledSensing',
        description: 'Set media sensors'
    },
    {
        command: '^ST',
        arguments: 'month, day, year, hour, minute, second, format',
        description: 'Set RTC date and time'
    },
    {
        command: '^SX',
        arguments: 'condition, destination, set, clear, setting, port',
        description: 'Set alert'
    },
    {
        command: '^SZ',
        arguments: 'version',
        description: 'Set ZPL version'
    },
    {
        command: '~TA',
        arguments: 'change',
        description: 'Tear-off adjust position'
    },
    {
        command: '^TB',
        arguments: 'orientation, maxWidth, maxHeight',
        description: 'Text block'
    },
    {
        command: '^TO',
        arguments: 'from, to',
        description: 'Transfer object'
    },
    {
        command: '~WC',
        arguments:'',
        description: 'Print configuration label'
    },
    {
        command: '^WD',
        arguments: 'path',
        description: 'Print directory label'
    },
    {
        command: '^XA',
        arguments:'',
        description: 'Start format (alternate command: 0x02)'
    },
    {
        command: '^XB',
        arguments:'',
        description: 'Supress backfeed'
    },
    {
        command: '^XF',
        arguments: 'path',
        description: 'Recall format'
    },
    {
        command: '^XG',
        arguments: 'path, magnificationX, magnificationY',
        description: 'Recall graphics'
    },
    {
        command: '^XZ',
        arguments: '',
        description: 'End format (alternate command: 0x03)'
    },
    {
        command: '^ZZ',
        arguments: 'idle, status',
        description: 'Printer sleep'
    }
];