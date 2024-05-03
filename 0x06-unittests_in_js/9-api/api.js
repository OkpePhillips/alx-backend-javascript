const express = require('express');

const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    res.status(400).send('Invalid cart ID. Must be a number.');
    return;
  }
  res.send(`Payment methods for cart ${id}`);
});

module.exports = app;
