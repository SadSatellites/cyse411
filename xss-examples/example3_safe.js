const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const q = req.query.q;
  res.json({ message: 'Results for', query: q });
});
