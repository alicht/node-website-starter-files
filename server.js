const express = require('express');
const app = express();
var path = require('path');



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

