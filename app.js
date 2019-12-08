const express = require('express');

const app = express();

const {
  PORT = 3000,
} = process.env;

const homeRouter = require('./routes/home');
const SignInRouter = require('./routes/Sign-In');
const SignUpRouter = require('./routes/Sign-up');
const MainRouter = require('./routes/main');

app.use('/', homeRouter);
app.use('/SignIn', SignInRouter);
app.use('/SignUp', SignUpRouter);
app.use('/Main', MainRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}...`);
});
