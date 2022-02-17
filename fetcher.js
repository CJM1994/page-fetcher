const URL = process.argv[2];
const FILE_PATH = process.argv[3];
const fs = require('fs');
let rawFile = '';

const fetchPage = function () {



}

const net = require('net');
const connection = net.createConnection({
  host: 'www.example.edu',
  port: 80
})
connection.setEncoding('UTF8');

connection.write('GET / HTTP/1.1\r\n');
connection.write(`Host: www.example.edu\r\n`);
connection.write('\r\n');

connection.on('data', (data) => {
  rawFile = data;

  fs.writeFile('./index.html', rawFile, err => {

    if (err) {
      console.log(err);
      return;
    }

  })

})



// console.log(URL);
// console.log(FILE_PATH);

// TESTS
// node fetcher.js www.example.edu ./