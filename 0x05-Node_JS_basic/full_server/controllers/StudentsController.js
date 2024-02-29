import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = 'database.csv';
      const students = await readDatabase(database);

      let responseMessage = 'This is the list of our students:\n';
      Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach((field) => {
        const studentCount = students[field].length;
        responseMessage += `Number of students in ${field}: ${studentCount}. List: ${students[field].join(', ')}\n`;
      });

      return res.status(200).send(responseMessage);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.query;

      if (!['CS', 'SWE'].includes(major)) {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const database = 'database.csv';
      const students = await readDatabase(database);

      const studentsInMajor = students[major] || [];

      const responseMessage = `List: ${studentsInMajor.join(', ')}`;

      return res.status(200).send(responseMessage);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
