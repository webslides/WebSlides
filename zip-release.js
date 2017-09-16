/* eslint-disable no-console */
const fs = require('fs');
const archiver = require('archiver');
const pck = require('./package.json');

const output = fs.createWriteStream(`${__dirname}/${pck.name}.zip`);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`${archive.pointer()} total bytes`);
});

archive.on('error', err => {
  throw err;
});

archive.pipe(output);

pck.release.files.forEach(f => archive.glob(f));

archive.finalize();
