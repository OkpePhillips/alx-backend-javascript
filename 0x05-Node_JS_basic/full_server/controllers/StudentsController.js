const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentFields = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(studentFields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      sortedFields.forEach(field => {
        const count = studentFields[field].length;
        const list = studentFields[field].join(', ');
        responseText += `Number of students in ${field}: ${count}. List: ${list}\n`;
      });

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;

      if (!['CS', 'SWE'].includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
      }

      const studentFields = await readDatabase(process.argv[2]);

      const studentList = studentFields[major] || [];

      const responseText = `List: ${studentList.join(', ')}`;

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
