const fs = require('fs').promises;


async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then(data => {
    	const lines = data.trim().split('\n');
    	const studentLines = lines.slice(1);
    	let studentCount = 0;
        const studentFields = {};
        for (const line of studentLines) {
          if (line.trim() === '') {
	    continue;
          }
          const fields = line.split(',');
          studentCount++;
          const firstName = fields[0];
          if (!studentFields[fields[3]]) {
            studentFields[fields[3]] = { count: 0, list: [] };
          }
          studentFields[fields[3]].count++;
          studentFields[fields[3]].list.push(firstName);
        }
        console.log(`Number of students: ${studentCount}`);
        for (const field in studentFields) {
          const { count, list } = studentFields[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
        }
	resolve({ studentCount, studentFields });
      })
      .catch(error => {
	 reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
