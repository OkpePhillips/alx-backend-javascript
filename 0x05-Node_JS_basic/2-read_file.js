const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line, index) => index !== 0 && line.trim() !== '');
    const fieldCounts = {};

    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[3];
      if (fieldCounts[field]) {
        fieldCounts[field].push(fields[0]);
      } else {
        fieldCounts[field] = [fields[0]];
      }
    });

    const totalStudents = lines.length;
    console.log(`Total number of students: ${totalStudents}`);
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
