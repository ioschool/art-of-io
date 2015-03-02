var fs = require('fs')

fs.createReadStream('greetz.txt')
  .pipe(process.stdout)
