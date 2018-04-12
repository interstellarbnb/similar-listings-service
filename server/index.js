const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');

let app = express();
let port = 3001;

app.listen(port, () => console.log(`App live on http://localhost:${port}`));

app.get('/', (req, res) => res.send('Hello!'))
