var fs = require('fs');

fs.readdir('../filesystem_npm', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.writeFile('foldercontent.txt', data, function (err) {
        if (err) throw err;
        console.log('\n Saved new file with data!');
      });
  });