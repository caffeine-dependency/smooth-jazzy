const { Client } = require('pg');
const {username, password} = require('./credentials.js')
const connectionString = `postgres://${username}:${password}@localhost:5432/search`

const postgres = new Client({
  connectionString: connectionString
});

postgres.connect((err)=> {
  if (err) {
    console.error('Error:', err.stack);
  } else {
    console.log('Connected to PostgresSQL DB')
  }
});

postgres.on('error', err => 
console.log('OH SHIT!  Some error happenedz!', err.stack));

module.exports = postgres;