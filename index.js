const express = require('express');

const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello, I am a simple Express server deployed with DevOps!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});