const express = require('express')
const app = express()
const port = 3000
 
app.use(express.json())

require('./config/db');

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})