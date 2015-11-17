// TODO: accept units (currently defaulting to inches)
export function dots(l, printer = defaultPrinter) {
    return Math.round(l * printer.resolutionDPI);
}
