const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

// doc.pipe(); // write to PDF
doc.pipe(fs.createWriteStream('output.pdf')); // HTTP response

// add stuff to PDF here using methods described below...

doc.text('Hello World').fontSize(50);

// Add a 50 point margin on all sides
doc
  .addPage({
    margin: 50,
  })
  .text('This is another page in the pdf');

// finalize the PDF and end the stream
doc.end();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.post('/html');
