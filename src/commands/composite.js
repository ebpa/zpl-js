export default [
    {
        command: 'qr',
        parameters: ['text', 'errorCorrectionLevel', 'model', 'magnificationFactor', 'd', 'e', 'inputMode', 'x', 'y'],
        description: '2-dimensional barcode',
        fn: function ({text = null, errorCorrectionLevel = null, model = null, magnificationFactor = 5 /* default for 300dpi printers */, d = null, e = null, inputMode = 'A', x /*= dots(1.4)*/, y = null}) {
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
                '^FD' + inputMode + ',' + text + '^FS\n';
        }
    }
];
