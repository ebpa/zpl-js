# ZPL-JS

[![Join the chat at https://gitter.im/ebpa/zpl-js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ebpa/zpl-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

ZPL-JS is a ZPL / ZPL II JavaScript library for printing to Zebra printers.  It's goal is to make printing to Zebra printers as easy as possible with JavaScript while still leveraging the power of ZPL.

**Note: This a rough early release.  The CLI is probably not usable for you without modification.  For the impatient: PR's welcome ;-**)

    var zpl = require('zpl');
    zpl.print()

## Installation

To install from github:

    $ git clone https://github.com/ebpa/zpl-js
    $ cd zpl-js
    $ npm install

<!--To install via npm:

    $ npm install
-->

## API Reference

TODO: Explain dual API

## CLI Interface

It's also possible to print directly from the command line via:

    $ babel-node print.js

## Tests

To run the unit tests

    $ npm test

## Contributors

You can help make this library better and more useful by:

* Submit bugs via the [issue tracker](https://github.com/ebpa/zpl-js/issues) here on Github
* [Add printers](https://github.com/ebpa/zpl-js/wiki/Adding-Printers)

## Getting Help

Find me on gitter at gitter.im/zpl-js

## License

ZPL-JS is freely distributable under the terms of the [MIT license](https://github.com/ebpa/zpl-js/blob/develop/LICENSE).
