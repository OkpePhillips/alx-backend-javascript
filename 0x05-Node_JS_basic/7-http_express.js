const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
    res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const database = process.argv[2];
        const data = await fs.readFile(database, 'utf8');
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
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudents}\n`);
        for (const field in fieldCounts) {
            res.write(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}\n`);
        }
        res.end();
    } catch (error) {
        res.status(500).send(`Error: ${error.message}\n`);
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

