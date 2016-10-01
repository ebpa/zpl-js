const PRINT_METHODS = {
    DIRECT_THERMAL: 1,
    THERMAL_TRANSFER: 2
};

const SYMBOLOGY = {
    LINEAR_CODABAR : {
        name: 'Linear Codabar',
        description: '',
        toString: () => 1
    },
    CODE_11 : {
        name: 'Code 11',
        description: '',
        toString: () => 2
    },
    CODE_128 : {
        name: 'Code 128',
        description: '',
        toString: () => 3
    },
    CODE_128_WITH_ABC : {
        name: 'Code 128 with subsets A/B/C',
        description: '',
        toString: () => 4
    },
    CODE_39 : {
        name: 'Code 39',
        description: '',
        toString: () => 5
    },
    CODE_93 : {
        name: 'Code 93',
        description: '',
        toString: () => 6
    },
    EAN_13 : {
        name: 'EAN-13',
        description: '',
        toString: () => 7
    },
    EAN_14 : {
        name: 'EAN-14',
        description: '',
        toString: () => 8
    },
    EAN_8 : {
        name: 'EAN-8',
        description: '',
        toString: () => 9
    },
    EAN_8_AND_EAN_13_W2OR5 : {
        name: 'EAN-8 and EAN-13 with 2 or 5 digit extensions',
        description: '',
        toString: () => 10
    },
    GERMAN_POST_CODE : {
        name: 'German Post Code',
        description: '',
        toString: () => 11
    },
    INDUSTRIAL_2OF5 : {
        name: 'Industrial 2-of-5',
        description: '',
        toString: () => 12
    },
    INTERLEAVED_2OF5 : {
        name: 'Interleaved 2-of-5',
        description: '',
        toString: () => 13
    },
    JAPANESE_POSTNET : {
        name: 'Japanese Postnet',
        description: '',
        toString: () => 14
    },
    LOGMARS : {
        name: 'Logmars',
        description: '',
        toString: () => 15
    },
    MSI : {
        name: 'MSI',
        description: '',
        toString: () => 16
    },
    MSI_3 : {
        name: 'MSI-3',
        description: '',
        toString: () => 17
    },
    PLESSEY : {
        name: 'Plessey',
        description: '',
        toString: () => 18
    },
    POSTNET : {
        name: 'Postnet',
        description: '',
        toString: () => 19
    },
    RSS : {
        name: 'RSS (reduced space symbology)',
        description: '',
        toString: () => 20
    },
    STANDARD_2OF5 : {
        name: 'Standard 2-of-5',
        description: '',
        toString: () => 21
    },
    UCC_EAN_128 : {
        name: 'UCC/EAN-128',
        description: '',
        toString: () => 22
    },
    UPC_EAN_2OR5 : {
        name: 'UPC and EAN 2 or 5 digit extensions',
        description: '',
        toString: () => 23
    },
    UPC_A : {
        name: 'UPC-A',
        description: '',
        toString: () => 24
    },
    UPC_A_UPC_E_2OR5 : {
        name: 'UPC-A and UPC-E with 2 or 5 digit extensions',
        description: '',
        toString: () => 25
    },
    UPC_A_UPC_E_EAN_2OR5 : {
        name: 'UPC-A and UPC-E with EAN 2 or 5 digit extensions',
        description: '',
        toString: () => 26
    },
    UPC_E : {
        name: 'UPC-E',
        description: '',
        toString: () => 27
    },
    AZTEC_2D : {
        name: '2-dimensional Aztec',
        description: '',
        toString: () => 28
    },
    CODABLOCK : {
        name: 'Codablock',
        description: '',
        toString: () => 29
    },
    CODE_49 : {
        name: 'Code 49',
        description: '',
        toString: () => 30
    },
    DATA_MATRIX : {
        name: 'Data Matrix',
        description: '',
        toString: () => 31
    },
    MACROPDF417 : {
        name: 'MacroPDF417',
        description: '',
        toString: () => 32
    },
    MAXICODE : {
        name: 'MaxiCode',
        description: '',
        toString: () => 33
    },
    MICROPDF417 : {
        name: 'MicroPDF417',
        description: '',
        toString: () => 34
    },
    PDF417 : {
        name: 'PDF417',
        description: '',
        toString: () => 35
    },
    QR_CODE : {
        name: 'QR Code',
        description: '',
        toString: () => 36
    },
    FONTS_GRAPHICS : {
        name: 'Fonts and Graphics',
        description: '',
        toString: () => 37
    }
};

var MEDIA_TYPES = {
    BLACK_BAR : {
        name: 'black_bar',
        description: '',
        toString: () => 1
    },
    BLACK_MARK : {
        name: 'black_mark',
        description: '',
        toString: () => 2
    },
    CONTINUOUS : {
        name: 'continuous',
        description: '',
        toString: () => 3
    },
    CONTINUOUS_RECEIPT : {
        name: 'continuous_receipt',
        description: '',
        toString: () => 4
    },
    DIE_CUT : {
        name: 'die-cut',
        description: '',
        toString: () => 5
    },
    FANFOLD : {
        name: 'fanfold',
        description: '',
        toString: () => 6
    },
    GAP : {
        name: 'gap',
        description: '',
        toString: () => 7
    },
    NOTCHED : {
        name: 'notched',
        description: '',
        toString: () => 8
    },
    PERFORATED : {
        name: 'perforated',
        description: '',
        toString: () => 9
    },
    RECEIPT : {
        name: 'receipt',
        description: '',
        toString: () => 10
    },
    ROLL_FED : {
        name: 'roll-fed',
        description: '',
        toString: () => 11
    },
    TAG : {
        name: 'tag',
        description: '',
        toString: () => 12
    },
    TAG_STOCK : {
        name: 'tag_stock',
        description: '',
        toString: () => 13
    }
};

export default {
    PRINT_METHODS,
    SYMBOLOGY,
    MEDIA_TYPES
};
