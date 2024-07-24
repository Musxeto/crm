import express from 'express';
import pool from './database.js';  // Adjust path if necessary
import config from './config.js';  // Adjust path if necessary

const app = express();

app.get('/', async (req, res) => {
  
    console.log("hello world")

});

const port = config.server.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
