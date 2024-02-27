const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject("Cannot load the database");
            } else {
                const lines = data.split('\n').filter((line, index) => index !== 0 && line.trim() !== '');
                const fieldCounts = {};

                lines.forEach(line => {
                    const fields = line.split(',');
                    const field = fields[3];
                    if (fieldCounts[field]) {
                        fieldCounts[field].push(fields[0]);
                    } else {
                        fieldCounts[field] = [fields[0]];
                    }
                });

                const totalStudents = lines.length;
                console.log(`Number of students: ${totalStudents}`);
                for (const field in fieldCounts) {
                    console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
                }
                resolve();
            }
        });
    });
}

module.exports = countStudents;
