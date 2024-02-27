const http = require('http');
const fs = require('fs');

const app = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const url = req.url;
    if (url === '/') {
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        try {
            const database = process.argv[2];
            const data = await fs.promises.readFile(database, 'utf8');
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
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error: ${error.message}\n`);
        }
    } else {
        res.end('404 Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
