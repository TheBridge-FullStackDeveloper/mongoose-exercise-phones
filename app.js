const express = require('express')
const app = express()
const port = 3000
 
app.use(express.json())

require('./config/db');

app.use('/', require('./routes'));

app.use((error, req, res, next) => {
  next (new Error ('Path not found'));
});

app.use((error, req, res) => {
  res.status(404).json({
    success: false,
    message: error.message
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});