const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentLines = lines.slice(1).filter((line) => line.trim() !== '');
    let studentCount = 0;
    const studentFields = {};
    for (const line of studentLines) {
      const fields = line.split(',');
      studentCount += 1;
      const firstName = fields[0];
      if (!studentFields[fields[3]]) {
        studentFields[fields[3]] = { count: 0, list: [] };
      }
      studentFields[fields[3]].count += 1;
      studentFields[fields[3]].list.push(firstName);
    }
    console.log(`Number of students: ${studentCount}`);
    for (const field in studentFields) {
      if (studentFields[field]) {
        const { count, list } = studentFields[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
