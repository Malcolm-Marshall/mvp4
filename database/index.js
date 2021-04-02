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

const getAll = (cb) => {
  connection.query('SELECT * FROM plants', (err, result) => {
    if (err) {
      cb(err, null)
    }
    cb(null, result);
  })
};

const addPlant = (data, cb) => {
  console.log(data)
  connection.query('INSERT INTO plants (name, water, sun, photo) VALUES (?, ?, ?, ?)', [data.name, data.water, data.sun, data.photo], (err, result) => {
    if (err) {
      cb(err)
    }
    cb(null, result);
  })
}

const deletePlant = (id, cb) => {
  console.log(id)
  connection.query('DELETE FROM plants WHERE id=?', [id], (err, result) => {
    if (err) cb(err);
    cb(null, result);
  })
}

const editPlant = (name, id, cb) => {
  connection.query('UPDATE cows SET SET name=? WHERE id=?', [name, id], (err, result) => {
    if (err) cb(err);
    cb(null, result);
  })
}

module.exports = {
  getAll,
  addPlant,
  deletePlant,
  editPlant
};
