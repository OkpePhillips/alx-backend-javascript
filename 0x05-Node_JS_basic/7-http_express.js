const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];
  countStudents(filePath)
    .then(({ studentCount, studentFields }) => {
      let responseText = 'This is the list of our students\n';
      responseText += `Number of students: ${studentCount}\n`;
      const fields = Object.entries(studentFields);
      fields.forEach(([field, { count, list }], index) => {
        responseText += `Number of students in ${field}: ${count}. List: `;
        if (list.length === 0) {
          responseText += '\n';
        } else {
          responseText += list.join(', ');
          if (index !== fields.length - 1) {
            responseText += '\n';
          }
        }
      });
      res.status(200).send(responseText);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

const port = 1245;
app.listen(port, () => {});

module.exports = app;
