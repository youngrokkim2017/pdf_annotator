const pdfCanvas = document.getElementById('pdf-canvas')
const pdfContext = pdfCanvas.getContext('2d')

pdfCanvas.height = window.innerHeight;
pdfCanvas.width = window.innerWidth;

function showPdf() {
    pdfjsLib.getDocument('sample.pdf').promise.then((pdf) => {
        showPage(pdf)
    })
}

function showPage(pdf) {
    pdf.getPage(1).then(page => {
        const viewport = page.getViewport({scale:1});
        pdfCanvas.width = viewport.width;
        pdfCanvas.height = viewport.height;

        const renderContext = {
            canvasContext: pdfContext,
            viewport: viewport,
        }
        page.render(renderContext)
    })
}

showPdf()