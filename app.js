const express = require('express');
const app = express();

app.get('/api/public', (req, res) => {
  res.json({ message: "This is a public endpoint." });
});

app.get('/api/secure', (req, res) => {
  res.json({ message: "This is a protected endpoint." });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
