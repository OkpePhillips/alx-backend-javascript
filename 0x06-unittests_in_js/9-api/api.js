const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Invalid cart ID');
  }
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
