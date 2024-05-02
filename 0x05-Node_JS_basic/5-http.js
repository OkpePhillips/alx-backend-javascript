const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];
    countStudents(filePath)
      .then(({ studentCount, studentFields }) => {
        res.statusCode = 200;
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
        res.end(responseText);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

const port = 1245;
app.listen(port, () => {});

module.exports = app;
