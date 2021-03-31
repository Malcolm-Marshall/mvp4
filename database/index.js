const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'happyPlants'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

var getAll = (cb) => {
  connection.query('SELECT * FROM plants', (err, result) => {
    if (err) {
      cb(err, null)
    }
    cb(null, result);
  })
}

module.exports = {
  getAll
};
