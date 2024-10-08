export default html2pdf;
/**
 * Generate a PDF from an HTML element or string using html2canvas and jsPDF.
 *
 * @param {Element|string} source The source element or HTML string.
 * @param {Object=} opt An object of optional settings: 'margin', 'filename',
 *    'image' ('type' and 'quality'), and 'html2canvas' / 'jspdf', which are
 *    sent as settings to their corresponding functions.
 */
declare function html2pdf(src: any, opt?: any | undefined): any;
declare namespace html2pdf {
    export { Worker };
}
import Worker from './worker.js';
