import constants from './constants.js';

const METHODS = constants.PRINT_METHODS;
const MEDIA = constants.MEDIA_TYPES;
const SYMBOL = constants.SYMBOLOGY;

var PRINTERS = {
    'ZEBRA_GX430T' : {
        model_name: 'ZEBRA_GX430T',
        print_methods: [METHODS.directThermal, METHODS.thermalTransfer], //Print method: direct thermal/thermal transfer
        languages: ['EPL', 'ZPL'], //Core programming languages: EPL2, ZPL I/ZPL II

        resolutionDPI: 300, //Resolution: 300 dpi (12 dots/mm)
        resolutionDPMM: 12,

        // Memory
        memoryStandard: 8, //Standard: 8 MB SDRAM (3 MB available to user); 4 MB Flash (1.5 MB available to user)
        memoryOptional: 64, //Optional: 64 MB Flash (68 MB total) with real time clock (65.5 MB available to user)

        // Printing
        printWidth: 104, //Print width: 4.09" (104 mm)
        printLength: 991, //Print length: 39" (991 mm)
        printMaxSpeed_mm: 102, // Print speed: up to 4" (102 mm) per second

        sensors: ['reflective', 'transmissive'],//Media sensors: Reflective, Transmissive

        //Media Characteristics
        labelMaxWidth_mm: 108, //Maximum label and liner width: 4.25" (108 mm)
        labelMinWidth_mm: 19, //Minimum label and liner width: 0.75" (19 mm)
        labelMaxLength_mm: 991, //Maximum label and liner length: 0.38" (9.7 mm) to 39" (991 mm)
        labelMinLength_mm: 9.7,
        labelMaxRollDiameter_mm: 127, //Maximum roll diameter: 5" (127 mm)
        labelCoreDiameter_mm: 12.7, //Core diameter: 0.5" (12.7 mm), 1.0" (25.4 mm), 1.5" (38.1)
        mediaThicknessMax_mm: 0.20, //Media thickness: 0.003" (0.08 mm) to 0.0075" (0.20 mm)
        mediaThicknessMin_mm: 0.08,
        media: [
            MEDIA.BLACK_BAR,
            MEDIA.BLACK_MARK,
            MEDIA.CONTINUOUS,
            MEDIA.CONTINUOUS_RECEIPT,
            MEDIA.DIE_CUT,
            MEDIA.FANFOLD,
            MEDIA.GAP,
            MEDIA.NOTCHED,
            MEDIA.PERFORATED,
            MEDIA.RECEIPT,
            MEDIA.ROLL_FED,
            MEDIA.TAG,
            MEDIA.TAG_STOCK
        ],

        //Ribbon Characteristics
        ribbonOuterDiamter_mm: 34, //Outside diameter: 1.34" (34 mm)
        ribbonStandardLength_mm: 74000, //Standard length: 244' (74 m)
        ribbonRatio: 1, //Ratio: 1:1
        ribbonMaxWidth_mm: 110,//Ribbon width recommended to be at least as wide as media (1.33" (33.8 mm) to 4.3" (110 mm))
        ribbonMinWidth: 33.8,
        ribbonInnerDiameterCore_mm: 12.7, //ID Core: 0.5" (12.7 mm)

        //Operating Characteristics
        operatingTempMin_C: 5,//Operating temperature TT: Operating temperature: 40° F (5° C) to 105° F (41° C)
        operatingTempMax_C: 41,
        //Thermal transfer DT: Operating temperature: 40° F (5° C) to 105° F (41° C)
        //Direct thermal Storage temperatures: -40° F (-40° C) to 140° F (60° C)
        //Operating humidity: 10-90% non-condensing
        //Storage humidity: 5-95% non-condensing
        //Electrical: Auto-detectable (PFC Compliant) 100-240 VAC, 50-60 Hz

        //Physical Characteristics
        width_mm: 194, //Width: 7.6" (194 mm)
        height_mm: 191, //Height: 7.5" (191 mm)
        depth_mm: 254, //Depth: 10" (254 mm)
        weight_kg: 2.1, //Weight: 4.6 lbs (2.1 kg)
        shippingWeight_kg: 4.1, //Shipping weight: 9.1 lbs (4.1 kg)

        //10/100 internal Ethernet connectivity
        //802.11 b/g wireless radio connectivity with LCD display (replaces Parallel port)
        //Bluetooth wireless connectivity with LCD display (replaces Parallel port)
        //Adjustable media sensor
        //Cutter for various media types
        //Dispenser - label peel and present with present sensor
        //Asian font kits
        //Communication and Interface Capabilities

        //Auto-sensing Serial RS-232 (DB-9)
        //USB V1.1, bi-directional
        //Centronics Parallel
        //Optional: 10/100 internal Etherenet (replaces Parallel port)
        //Optional: 802.11 b/g wireless radio connectivity with LCD display (replaces Parallel port)
        //Optional: Bluetooth wireless connectivity with LCD display (replaces Parallel port)

        symbologies: [
            SYMBOL.LINEAR_CODABAR,
            SYMBOL.CODE_11,
            SYMBOL.CODE_128,
            SYMBOL.CODE_128_WITH_ABC,
            SYMBOL.CODE_39,
            SYMBOL.CODE_93,
            SYMBOL.EAN_13,
            SYMBOL.EAN_14,
            SYMBOL.EAN_8,
            SYMBOL.EAN_8_AND_EAN_13_W2OR5,
            SYMBOL.GERMAN_POST_CODE,
            SYMBOL.INDUSTRIAL_2OF5,
            SYMBOL.INTERLEAVED_2OF5,
            SYMBOL.JAPANESE_POSTNET,
            SYMBOL.LOGMARS,
            SYMBOL.MSI,
            SYMBOL.MSI_3,
            SYMBOL.PLESSEY,
            SYMBOL.POSTNET,
            SYMBOL.RSS,
            SYMBOL.STANDARD_2OF5,
            SYMBOL.UCC_EAN_128,
            SYMBOL.UPC_EAN_2OR5,
            SYMBOL.UPC_A,
            SYMBOL.UPC_A_UPC_E_2OR5,
            SYMBOL.UPC_A_UPC_E_EAN_2OR5,
            SYMBOL.UPC_E,
            SYMBOL.AZTEC_2D,
            SYMBOL.CODABLOCK,
            SYMBOL.CODE_49,
            SYMBOL.DATA_MATRIX,
            SYMBOL.MACROPDF417,
            SYMBOL.MAXICODE,
            SYMBOL.MICROPDF417,
            SYMBOL.PDF417,
            SYMBOL.QR_CODE,
            SYMBOL.FONTS_GRAPHICS
        ],

        port: 9100, // Default port
        password: '1234' // Default password

        // Fonts
        //16 resident expandable ZPL II bitmap fonts
        //One resident scalable ZPL font
        //Five resident expandable EPL2 bitmap fonts
        //Supports user-defined fonts and graphics - including customer logos
    }
};

export default PRINTERS;
