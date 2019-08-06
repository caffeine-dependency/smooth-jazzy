// const {Client}= require('pg');
// const {username, password} = require('./credentials.js')
// const connectionString = `postgres://${username}:${password}@localhost:5432/search`

// const client = new Client({
//   connectionString: connectionString
// });

// client.connect((err)=> {
//   if (err) {
//     console.error('Error:', err.stack);
//   } else {
//     console.log('Connected to PostgresSQL DB')
//   }
// });

// client.on('end', ()=> console.log('Connection ended'));
// client.on('error', err => 
// console.log('OH SHIT!  Some error happenedz!', err.stack));

// module.exports = client;