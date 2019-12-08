const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', `${req.headers.cookie}`);
  res.sendfile('./Files/Html/home.html');
  res.clearCookie();
});

module.exports = router;
