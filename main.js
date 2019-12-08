const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', `${req.headers.cookie}`);
  res.sendfile('./Files/Html/main.html');
  // eslint-disable-next-line no-console
  console.log(`this is cookies from main:  ${req.headers.cookie}`);
});

module.exports = router;
