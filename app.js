const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express');
const registrationRouter = require('/routes/registration')


const PORT = process.env.PORT || 3000;

const app = express();
const sessionConfig = {
  name: 'super_hero',
  secret: 'hello',
  resave: false,
  saveUnitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14,
    httpOnly: true,
  },
};
const loginRouter = require('./routes/login');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(expressSession(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/login', loginRouter);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Hello server', PORT);
});


// Подключение роута /registration
app.use('/registration', registrationRouter);
