const { faker } = require('@faker-js/faker');
// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'SDE@f66ng'
});

try {
  connection.query("SHOW TABLES", (err, result) => {
    if(err) throw err;
    console.log(result)
  })
} catch (err) {
  console.log(err)
}

let getRandomUser= () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

console.log(getRandomUser());