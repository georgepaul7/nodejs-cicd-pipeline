const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Node.js App!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//Triggering CI/CD pipeline
