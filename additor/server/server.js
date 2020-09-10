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
  res.status(200).json(data);
});

app.post('/login', function (req, res) {
  const curUser = data.find((eachObj) => eachObj.username == req.body.username);
  if (curUser) {
    if (curUser.password == req.body.password) {
      res.status(200).json({ ...curUser });
    } else {
      res.status(400).json({ error: 'ok', message: 'password not valid' });
    }
  } else {
    const addedUser = {
      username: req.body.username,
      password: req.body.password,
      contents: '',
    };
    data.push(addedUser);
    res
      .status(200)
      .json({ ...addedUser, message: 'successfully created and logged in' });
  }
});

app.post('/update', function (req, res) {
  try {
    var foundIndex = data.findIndex(
      (datum) => datum.username == req.body.username
    );
    console.log(foundIndex);
    const newElement = {
      ...data[foundIndex],
      contents: req.body.contents,
    };
    console.log(newElement);
    data[foundIndex] = newElement;
    res.status(200).json(data[foundIndex]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
