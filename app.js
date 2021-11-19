const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
// const dotenv = require('dotenv').config();
const session = require('express-session');

const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index');
const cardsRouter = require('./routes/cards');
const cards1Router = require('./routes/cards1');
const teamRouter = require('./routes/team');
const deleteCardRouter = require('./routes/deleteCard');
const logoutRouter = require('./routes/logout');

const PORT = process.env.PORT || 3000;

const app = express();
const sessionConfig = {
  store: new FileStore(),
  name: 'super_hero',
  secret: 'ahaha',
  resave: false,
  saveUnitialized: false,
  cookie: {
  },
};

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/cards1', cards1Router);
app.use('/team', teamRouter);
app.use('/deleteCard', deleteCardRouter);
app.use('/logout', logoutRouter);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Hello server', PORT);
});
