/* eslint-disable no-shadow */
const express = require('express');
const bodyParser = require('body-parser');
const UserList = require('../Users');

const router = express.Router();

const URLencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', `${req.headers.cookie}`);
  res.sendfile('./Files/Html/Sign-in.html');
  res.clearCookie();
  console.log(req.headers.cookie);
});

router.post('/', URLencodedParser, (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // eslint-disable-next-line no-console
  console.log(req.body);
  const {
    login,
    password,
  } = req.body;

  const user = UserList.find((user) => user.login === login && user.password === password);
  // eslint-disable-next-line no-console
  console.log(`this is cookies from SignIn:  ${req.headers.cookie}`);


  if (user) {
    res.redirect('/Main');
  } else {
    res.redirect('/');
  }
});

module.exports = router;
