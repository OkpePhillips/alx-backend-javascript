const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const studentFields = {};

      for (const line of lines.slice(1)) {
        if (line.trim() === '') {
          continue;
        }
        const fields = line.split(',');
        const firstName = fields[0];
        const major = fields[3];
        if (!studentFields[major]) {
          studentFields[major] = [];
        }
        studentFields[major].push(firstName);
      }

      resolve(studentFields);
    });
  });
}

module.exports = { readDatabase };
