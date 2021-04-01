const express = require('express');
const path = require('path');
const db = require('../database/index');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.use(express.json());
app.use(cors());

app.get('/plants', (req, res) => {
  db.getAll((err, results) => {
    if (err) {
      console.log(err)
      res.send('Could not get data')
    } else {
      res.send(results);
    }
  })
})

app.post('/plants', (req, res) => {
  db.addPlant(req.body, (err, results) => {
    if (err) {
      console.log(err)
      res.send('Could not post data')
    } else {
      res.send('Posted to DB');
    }
  })
})

/*app.put(`/api/cows/:id`, (req, res) => {
  db.editCow(req.params.id, req.body, (err, results) => {
    if (err) {
      console.log(err)
      res.send('Could not edit cow')
    } else {
      res.send('Edited Cow');
    }
  })
})

app.delete('/api/cows/:id', (req, res) => {
  db.deleteCow(req.params.id, (err, results) => {
    if (err) {
      console.log(err)
      res.send('Could not delete cow')
    } else {
      res.send('Deleted cow');
    }
  })
})
*/
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
