//dependencias
const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const env = require('dotenv').config();
const port = process.env.PORT;
const helmet = require('helmet');
const morgan = require('morgan');

//Express API
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));
app.use("/rest",require('./routes/index.routes'));

console.log(env);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
})