const http = require('http');

require('dotenv').config();
const express = require('express')
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Initial Server setup'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} on 0.0.0.0 127`)
})