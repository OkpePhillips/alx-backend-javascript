import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const lines = data.split('\n').filter((line, index) => index !== 0 && line.trim() !== '');
      const fieldCounts = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[3];
        const firstName = fields[0];
        if (fieldCounts[field]) {
          fieldCounts[field].push(firstName);
        } else {
          fieldCounts[field] = [firstName];
        }
      });

      resolve(fieldCounts);
    }
  });
});

export default readDatabase;
