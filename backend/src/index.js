const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const port = process.env.PORT || 3001;
const env = require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/rest",require('./routes/index.routes'));

console.log(env);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
})