export default [
    {
        command: '^A',
        alias: 'setFont',
        parameters: ['font','height','width'],
        description: 'Set font for current field',
        fn: (fontName, fieldOrientation, characterHeight, width) => `^A${fontName}${fieldOrientation},${characterHeight},${width}`
        // f /[A-Z0-9]/
        // o /[NRIB]/
        // 10 <= h <= 32000
        // 10 <= w <= 32000
    },
    {
        command: '^A@',
        parameters: ['orientation, height, width, path'],
        description: 'Use font name to call font'
    },
    {
        command: '^B1',
        parameters: ['orientation, checkDigit, height, intLine, intLineAbove'],
        description: 'Code 11 bar code'
    },
    {
        command: '^B2',
        parameters: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'Interleaved 2 of 5 bar code'
    },
    {
        command: '^B3',
        parameters: 'orientation, checkDigit, height, intLine, intLineAbove',
        description: 'Code 39 bar code'
    },
    {
        command: '^B4',
        parameters: 'orientation, heightMultiplier, intLine, mode',
        description: 'Code 49 bar code'
    },
    {
        command: '^B5',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'Planet Code bar code'
    },
    {
        command: '^B7',
        parameters: 'orientation, rowHeight, security, columns, rows, truncate',
        description: 'PDF417 bar code'
    },
    {
        command: '^B8',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'EAN-8 bar code'
    },
    {
        command: '^B9',
        parameters: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'UPC-E bar code'
    },
    {
        command: '^BA',
        parameters: 'orientation, height, intLine, intLineAbove, checkDigit',
        description: 'Code 93 bar code'
    },
    {
        command: '^BB',
        parameters: 'orientation, height, security, columns, rows, mode',
        description: 'Codablock bar code'
    },
    {
        command: '^BC',
        parameters: 'orientation, height, intLine, intLineAbove, checkDigit, mode',
        description: 'Code 128 bar code (modes N, U and A only); UCC check digit not supported)'
    },
    {
        command: '^BD',
        parameters: 'mode, position, total',
        description: 'UPS MaxiCode bar code'
    },
    {
        command: '^BE',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'EAN-13 bar code'
    },
    {
        command: '^BF',
        parameters: 'orientation, height, mode',
        description: 'Micro-PDF417 bar code'
    },
    {
        command: '^BI',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'Industrial 2 of 5 bar code'
    },
    {
        command: '^BJ',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'Standard 2 of 5 bar code'
    },
    {
        command: '^BK',
        parameters: 'orientation, checkDigit, height, intLine, intLineAbove, startChar, stopChar',
        description: 'ANSI Codabar bar code'
    },
    {
        command: '^BL',
        parameters: 'orientation, height, intLineAbove',
        description: 'LOGMARS bar code'
    },
    {
        command: '^BM',
        parameters: 'orientation, checkDigitType, height, intLine, intLineAbove, checkDigit',
        description: 'MSI bar code'
    },
    {
        command: '^BO',
        parameters: 'orientation, magnification, ecic, err, menuSymbol, symbols, id',
        description: 'Aztec bar code'
    },
    {
        command: '^BP',
        parameters: 'orientation, checkDigit, height, intLine, intLineAbove',
        description: 'Plessey bar code'
    },
    {
        command: '^BQ',
        parameters: 'position, model, magnification, hqml, nabk',
        description: 'QR code bar code'
    },
    {
        command: '^BR',
        parameters: 'orientation, symbology, magnification, separatorHeight, height, segmentWidth',
        description: 'RSS bar code'
    },
    {
        command: '^BS',
        parameters: 'orientation, height, intLine, intLineAbove',
        description: 'UPC/EAN extension'
    },
    {
        command: '^BT',
        parameters: 'orientation, width, widthRatio, height, narrowWidth, rowHeight',
        description: 'TLC39 bar code'
    },
    {
        command: '^BU',
        parameters: 'orientation, height, intLine, intLineAbove, printCheckDigit',
        description: 'UPC-A bar code'
    },
    {
        command: '^BX',
        parameters: 'orientation, height, quality, columns, rows, format, escape',
        description: 'Data matrix bar code (quality 200 only)'
    },
    {
        command: '^BY',
        parameters: 'width, widthRatio, height',
        description: 'Bar code field defaults'
    },
    {
        command: '^BZ',
        parameters: 'orientation, height, intLine, intLineAbove, type',
        description: 'Postal bar code'
    },
    {
        command: ['^CC', '~CC'],
        parameters: 'char',
        description: 'Change caret'
    },
    {
        command: ['^CD', '~CD'],
        parameters: 'char',
        description: 'Change delimiter'
    },
    {
        command: '^CF',
        parameters: 'fontName, height, width',
        description: 'Change default font'
    },
    {
        command: '^CI',
        parameters: 'charset, src1, dest1, src2, dest2, ...',
        description: 'Change international font (charsets 0-13, 27, 28, 31, 33-36 only)'
    },
    {
        command: '^CM',
        parameters: 'memoryDevice, memoryDevice, memoryDevice, memoryDevice',
        description: 'Change memory letter designation'
    },
    {
        command: '^CO',
        parameters: 'on, memory, type',
        description: 'Cache on'
    },
    {
        command: '^CT',
        parameters: 'char',
        description: 'Change tilde (alternate command:�~CT)'
    },
    {
        command: '^CV',
        parameters: 'validation',
        description: 'Code validation'
    },
    {
        command: '^CW',
        parameters: 'fontName, path',
        description: 'Set font identifier'
    },
    {
        command: '~DB',
        parameters: 'path, orientation, maxHeight, maxWidth, base, space, chars, copyright, data',
        description: 'Download bitmap font'
    },
    {
        command: '~DE',
        parameters: 'path, tableSize, data',
        description: 'Download encoding'
    },
    {
        command: '^DF',
        parameters: 'path',
        description: 'Download format'
    },
    {
        command: '~DG',
        parameters: 'path, totalBytes, rowBytes, data',
        description: 'Download graphics'
    },
    {
        command: '~DN',
        parameters:'',
        description: 'Abort download graphics'
    },
    {
        command: '~DS',
        parameters: 'path, size, data',
        description: 'Download scalable font'
    },
    {
        command: '~DT',
        parameters: 'path, size, data',
        description: 'Download TrueType font'
    },
    {
        command: '~DU',
        parameters: 'path, size, data',
        description: 'Download unbounded TrueType font'
    },
    {
        command: '~DY',
        parameters: 'path, format, extension, totalBytes, rowBytes, data',
        description: 'Download objects (extensions G, B, P and T only)'
    },
    {
        command: '~EG',
        parameters:'',
        description: 'Erase all graphics (alternate command:�^EG)'
    },
    {
        command: '^FB',
        alias: 'fieldBlock',
        parameters: 'maxWidth, maxLines, lineSpacing, alignment, hangingIndent',
        description: 'Field block',
        fn: (a,b,c,d,e) => `^FB${a},${b},${c},${d},${e}`
        // 0 <= a <= [width of label]
        // 1 <= b <= 9999
        // -9999 <= c <= 9999
        // d in ['L','C','R','J']
        // 0 <= e <= 9999
    },
    {
        command: '^FC',
        parameters: 'indicator1, indicator2, indicator3',
        description: 'Field clock'
    },
    {
        command: '^FD',
        alias: 'fieldData',
        parameters: 'data',
        description: 'Field data',
        fn: (data) => `^FD${data}^FS`
    },
    {
        command: '^FH',
        parameters: 'hexIndicator',
        description: 'Field hexadecimaml indicator'
    },
    {
        command: '^FL',
        parameters: 'extensionPath, basePath, link',
        description: 'Font link'
    },
    {
        command: '^FM',
        parameters: 'x1, y2, x2, y2, ...',
        description: 'Field multiple origin locations'
    },
    {
        command: '^FN',
        parameters: 'fieldNumber',
        description: 'Field number'
    },
    {
        command: '^FO',
        alias: 'fieldOrigin',
        parameters: 'x, y',
        description: 'Field origin',
        fn: (x,y,z) => `^FO${x},${y},${z}`
        // 0 <= x <= 32000
        // 0 <= y <= 32000
        // z in [0, 1, 2]
    },
    {
        command: '^FP',
        parameters: 'direction, characterSpacing',
        description: 'Field parameter'
    },
    {
        command: '^FR',
        parameters:'',
        description: 'Field reverse print'
    },
    {
        command: '^FS',
        parameters:'',
        description: 'Field separator (alternate command:�0x0F)'
    },
    {
        command: '^FT',
        parameters: 'x, y',
        description: 'Field typeset'
    },
    {
        command: '^FV',
        parameters: 'data',
        description: 'Field variable'
    },
    {
        command: '^FW',
        parameters: 'orientation',
        description: 'Field orientation'
    },
    {
        command: '^FX',
        parameters: 'comment',
        description: 'Comment'
    },
    {
        command: '^GB',
        parameters: 'width, height, thickness, color, rounding',
        description: 'Graphic box'
    },
    {
        command: '^GC',
        parameters: 'diameter, thickness, color',
        description: 'Graphic circle'
    },
    {
        command: '^GD',
        parameters: 'width, height, thickness, color, orientation',
        description: 'Graphic diagonal line'
    },
    {
        command: '^GE',
        parameters: 'width, height, thickness, color',
        description: 'Graphic ellipse'
    },
    {
        command: '^GF',
        parameters: 'format, dataBytes, totalBytes, rowBytes, data',
        description: 'Graphic field'
    },
    {
        command: '^GS',
        parameters: 'orientation, height, width',
        description: 'Graphic symbol'
    },
    {
        command: '~HB',
        parameters:'',
        description: 'Battery status'
    },
    {
        command: '~HD',
        parameters:'',
        description: 'Head diagnostic'
    },
    {
        command: '^HF',
        parameters: 'path',
        description: 'Host format'
    },
    {
        command: '^HG',
        parameters: 'path',
        description: 'Host graphic'
    },
    {
        command: '^HH',
        parameters:'',
        description: 'Configuration label return'
    },
    {
        command: '~HI',
        parameters:'',
        description: 'Host identification'
    },
    {
        command: '~HM',
        parameters:'',
        description: 'Host RAM status'
    },
    {
        command: '~HS',
        parameters:'',
        description: 'Host status return'
    },
    {
        command: '~HU',
        parameters:'',
        description: 'Host alert configuration'
    },
    {
        command: '^HV',
        parameters:'',
        description: 'Host verification'
    },
    {
        command: '^HW',
        parameters: 'path',
        description: 'Host directory list'
    },
    {
        command: '^HY',
        parameters: 'path',
        description: 'Upload graphics'
    },
    {
        command: '^HZ',
        parameters: 'param',
        description: 'Display description information'
    },
    {
        command: '^ID',
        parameters: 'path',
        description: 'Delete object'
    },
    {
        command: '^IL',
        parameters: 'path',
        description: 'Image load'
    },
    {
        command: '^IM',
        parameters: 'path',
        description: 'Image move'
    },
    {
        command: '^IS',
        parameters: 'path, print',
        description: 'Image save'
    },
    {
        command: '~JA',
        parameters:'',
        description: 'Cancel all'
    },
    {
        command: '^JB',
        parameters: 'device',
        description: 'Initialize flash memory'
    },
    {
        command: '~JB',
        parameters:'',
        description: 'Reset optional memory'
    },
    {
        command: '~JC',
        parameters:'',
        description: 'Set media sensor calibration'
    },
    {
        command: '~JD',
        parameters:'',
        description: 'Enable communications diagnostics'
    },
    {
        command: '~JE',
        parameters:'',
        description: 'Disable communications diagnostics'
    },
    {
        command: '~JF',
        parameters: 'pause',
        description: 'Set battery condition'
    },
    {
        command: '~JG',
        parameters:'',
        description: 'Graphing sensor calibration'
    },
    {
        command: '^JJ',
        parameters: 'opMode, appMode, printSignalMode, errorMode, reprintMode, ribbonMode',
        description: 'Set auxiliary port'
    },
    {
        command: '~JL',
        parameters:'',
        description: 'Set label length'
    },
    {
        command: '^JM',
        parameters: 'adjustment',
        description: 'Set print density'
    },
    {
        command: '~JN',
        parameters:'',
        description: 'Head test fatal'
    },
    {
        command: '~JO',
        parameters:'',
        description: 'Head test not fatal'
    },
    {
        command: '~JP',
        parameters:'',
        description: 'Pause and cancel format'
    },
    {
        command: '~JR',
        parameters:'',
        description: 'Power on reset'
    },
    {
        command: '^JS',
        parameters: 'sensor',
        description: 'Sensor select'
    },
    {
        command: '~JS',
        parameters: 'sequence',
        description: 'Change backfeed sequence'
    },
    {
        command: '^JT',
        parameters: 'labels, manualSelection, first, last',
        description: 'Head test interval'
    },
    {
        command: '^JU',
        parameters: 'configuration',
        description: 'Configuration update'
    },
    {
        command: '^JW',
        parameters: 'tension',
        description: 'Set ribbon tension'
    },
    {
        command: '~JX',
        parameters:'',
        description: 'Cancel current format'
    },
    {
        command: '^JZ',
        parameters: 'reprint',
        description: 'Reprint after error'
    },
    {
        command: '~KB',
        parameters:'',
        description: 'Kill battery'
    },
    {
        command: '^KD',
        parameters: 'format',
        description: 'Select date and time format'
    },
    {
        command: '^KL',
        parameters: 'language',
        description: 'Select language'
    },
    {
        command: '^KN',
        parameters: 'name, description',
        description: 'Set printer name'
    },
    {
        command: '^KP',
        parameters: 'password',
        description: 'Set password'
    },
    {
        command: '^LF',
        parameters:'',
        description: 'List font links'
    },
    {
        command: '^LH',
        alias: 'labelHome',
        parameters: 'x, y',
        description: 'Label home',
        fn: (x, y) => `^LH${x},${y}`
        // 0 < x < 32000
        // 0 < y < 32000
    },
    {
        command: '^LL',
        parameters: 'length',
        description: 'Label length'
    },
    {
        command: '^LR',
        parameters: 'reverse',
        description: 'Label reverse print'
    },
    {
        command: '^LS',
        parameters: 'shift',
        description: 'Label shift'
    },
    {
        command: '^LT',
        parameters: 'top',
        description: 'Label top'
    },
    {
        command: '^MC',
        parameters: 'clear',
        description: 'Map clear'
    },
    {
        command: '^MD',
        parameters: 'darknessModifier',
        description: 'Modify darkness'
    },
    {
        command: '^MF',
        parameters: 'powerupAction, closingAction',
        description: 'Media feed'
    },
    {
        command: '^ML',
        parameters: 'maxLength, maxLogicalPaper, maxPhysicalPaper, maxRibbon',
        description: 'Max label length'
    },
    {
        command: '^MM',
        parameters: 'mode, prepeel',
        description: 'Print mode'
    },
    {
        command: '^MN',
        parameters: 'media',
        description: 'Media tracking'
    },
    {
        command: '^MP',
        parameters: 'mode',
        description: 'Mode protection'
    },
    {
        command: '^MT',
        parameters: 'mediaType',
        description: 'Media type'
    },
    {
        command: '^MU',
        parameters: 'units, baseDpi, dpiConversion',
        description: 'Set units of measurement'
    },
    {
        command: '^MW',
        parameters: 'enable',
        description: 'Modify head cold warning'
    },
    {
        command: '~NC',
        parameters: 'networkId',
        description: 'Network connect'
    },
    {
        command: '^NI',
        parameters: 'networkId',
        description: 'Network ID number'
    },
    {
        command: '~NR',
        parameters:'',
        description: 'Set all network printers transparent'
    },
    {
        command: '^NS',
        parameters: 'setting, ip, subnetMask, gateway',
        description: 'Change network settings'
    },
    {
        command: '~NT',
        parameters:'',
        description: 'Set current printer transparent'
    },
    {
        command: '^PA',
        parameters: 'defaultGlyph, bidi, charShaping, openTypeSupport',
        description: 'Advanced text properties'
    },
    {
        command: '^PF',
        parameters: 'rows',
        description: 'Slew rows'
    },
    {
        command: '^PH',
        parameters:'',
        description: 'Slew to home position (alternate command:�~PH)'
    },
    {
        command: '^PM',
        parameters: 'mirror',
        description: 'Print mirror image'
    },
    {
        command: '^PO',
        parameters: 'orientation',
        description: 'Print orientation'
    },
    {
        command: '^PP',
        parameters:'',
        description: 'Programmable pause (alternate command:�~PP)'
    },
    {
        command: '^PQ',
        parameters: 'labels, labelsBetweenPauses, replicates, noPause, cutOnError',
        description: 'Print quantity'
    },
    {
        command: '^PR',
        parameters: 'printSpeed, slewSpeed, backfeedSpeed',
        description: 'Print rate'
    },
    {
        command: '~PR',
        parameters:'',
        description: 'Applicator reprint'
    },
    {
        command: '~PS',
        parameters:'',
        description: 'Print start'
    },
    {
        command: '^PW',
        parameters: 'width',
        description: 'Print width'
    },
    {
        command: '~RO',
        parameters: 'counter',
        description: 'Reset counter'
    },
    {
        command: '^SC',
        parameters: 'baud, wordLength, parity, stopBits, protocolMode, protocol',
        description: 'Set serial communications'
    },
    {
        command: '~SD',
        parameters: 'darkness',
        description: 'Set darkness'
    },
    {
        command: '^SE',
        parameters: 'path',
        description: 'Select encoding'
    },
    {
        command: '^SF',
        parameters: 'mask, increment',
        description: 'Serialized field'
    },
    {
        command: '^SL',
        parameters: 'mode, language',
        description: 'Set RTC mode and language'
    },
    {
        command: '^SN',
        parameters: 'start, increment, pad',
        description: 'Serialized data'
    },
    {
        command: '^SO',
        parameters: 'clock, months, days, years, hours, minutes, seconds',
        description: 'Set RTC offset'
    },
    {
        command: '^SP',
        parameters: 'row',
        description: 'Start print'
    },
    {
        command: '^SQ',
        parameters: 'condition, destination, halt',
        description: 'Halt alert'
    },
    {
        command: '^SR',
        parameters: 'resistance',
        description: 'Set printhead resistance'
    },
    {
        command: '^SS',
        parameters: 'web, media, ribbon, length, intensity1, intensity2, sensing, mediaSensing, ledSensing',
        description: 'Set media sensors'
    },
    {
        command: '^ST',
        parameters: 'month, day, year, hour, minute, second, format',
        description: 'Set RTC date and time'
    },
    {
        command: '^SX',
        parameters: 'condition, destination, set, clear, setting, port',
        description: 'Set alert'
    },
    {
        command: '^SZ',
        parameters: 'version',
        description: 'Set ZPL version'
    },
    {
        command: '~TA',
        parameters: 'change',
        description: 'Tear-off adjust position'
    },
    {
        command: '^TB',
        parameters: 'orientation, maxWidth, maxHeight',
        description: 'Text block'
    },
    {
        command: '^TO',
        parameters: 'from, to',
        description: 'Transfer object'
    },
    {
        command: '~WC',
        parameters:'',
        description: 'Print configuration label'
    },
    {
        command: '^WD',
        parameters: 'path',
        description: 'Print directory label'
    },
    {
        command: '^XA',
        alias: ['startFormat','start'],
        parameters:'',
        description: 'Start format (alternate command:�0x02)',
        fn: () => '^XA'
    },
    {
        command: '^XB',
        parameters:'',
        description: 'Supress backfeed'
    },
    {
        command: '^XF',
        parameters: 'path',
        description: 'Recall format'
    },
    {
        command: '^XG',
        parameters: 'path, magnificationX, magnificationY',
        description: 'Recall graphics'
    },
    {
        command: '^XZ',
        alias: ['endFormat','end'],
        parameters: '',
        description: 'End format (alternate command:�0x03)',
        fn: () => '^XZ'
    },
    {
        command: '^ZZ',
        parameters: 'idle, status',
        description: 'Printer sleep'
    }
];
