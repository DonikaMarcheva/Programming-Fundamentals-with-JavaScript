function extractFile(text) {
    let pointIndex = text.lastIndexOf('.');
    let extension = text.substring(pointIndex + 1);
    let lastLineIndex = text.lastIndexOf('\\');
    let fileName = text.substring(lastLineIndex + 1, pointIndex);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')