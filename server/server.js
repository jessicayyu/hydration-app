const express = require('express');
const app = express();
const port = 3000;
const model = require('../db/dbconnect.js');


app.get('/user/:id/water', (req, res) => {
  model.User.find({ id: req.params.id }, (err, data) => {
    if (err) {
      console.log('err', err)
    } else {
    console.log(req.params.id, data);
    res.send(data);
    }
  })
});

app.get('/', (req, res) => res.send('Hi, main url responding!'));

app.listen(port, () => console.log(`App listening on ${port}.`));

