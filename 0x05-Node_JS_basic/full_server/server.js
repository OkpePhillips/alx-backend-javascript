const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);

const port = 1245;

app.listen(port, () => {});

export default app;
