// TODO: accept units (currently defaulting to inches)
export function inchesToDots(l, printer) {
    return Math.round(l * printer.resolutionDPI);
}
