const { Pool } = require('pg');
require('dotenv').config();
const connectionString = process.env.POSTGRESS_URL;

const pool = new Pool({connectionString,});
pool.connect();

module.exports={pool};