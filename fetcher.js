const URL = 'https://' + process.argv[2];
const FILE_PATH = process.argv[3];
const request = require('request');
const fs = require('fs');

const fetchPage = function () {

  request(URL, (error, response, body) => {

    console.log(error);
    console.log(response.statusMessage, response.statusCode);

    if (fs.existsSync(FILE_PATH + 'index.html')) {

      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })

      rl.question(`file already exists at ${FILE_PATH} overwrite?\n(y/n): `, (answer) => {

        if (answer === 'y') {
          write(body);
          console.log('file overwritten...')
          rl.close();
        } else if (answer === 'n') {
          console.log('cancelled file transfer...')
          rl.close();
        } else {
          console.log('please answer with y or n');
          process.exit();
        }

      })

    } else write(body);

  })
}

const write = function (body) {
  fs.writeFile(FILE_PATH + 'index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`file written to ${FILE_PATH}index.html (${body.length} bytes)`)
  })
}

fetchPage();