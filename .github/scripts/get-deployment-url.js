const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '../../deployments.json'), (err, data) => {
  const json = JSON.parse(data);

  console.log(json.)
})