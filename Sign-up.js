const express = require('express');


const router = express.Router();


router.get('/', (req, res) => {

  // eslint-disable-next-line no-console
  console.log(`this is cookies from SignUp:  ${req.headers.cookie}`);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', `${req.headers.cookie}`);
  res.sendfile('./Files/Html/Sign-up.html');
});

module.exports = router;
