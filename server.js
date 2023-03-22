const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(require('./routes'));

app.listen(PORT, ()=> console.log(`Now listening on http://localhost:${PORT}`));