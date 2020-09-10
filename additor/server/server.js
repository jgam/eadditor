const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./db');

//express
const port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routing
app.get('/users', function (req, res) {
  console.log('getUSERs');
  res.status(200).json(data);
});

app.post('/login', function (req, res) {
  console.log('login');
  console.log(req.body);
  const curUser = data.find((eachObj) => eachObj.username == req.body.username);
  console.log(curUser);
  if (curUser) {
    if (curUser.password == req.body.password) {
      res.status(200).json({ curUser });
    } else {
      res.status(400).json({ error: 'ok', message: 'password not valid' });
    }
  } else {
    console.log('create another user automatically for you');
    data.push({
      username: req.body.username,
      password: req.body.password,
      contents: '',
    });
    res.status(200).json({ message: 'successfully created and logged in' });

    console.log(data);
    console.log('created user done');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
