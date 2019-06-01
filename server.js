const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const error = require('./server/middlewares/error');
const passport = require('passport');
const strategies = require('./server/config/passport');
const cors = require('cors');
const helmet = require('helmet')

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors());
app.use(helmet())
// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('images'));


// enable authentication
app.use(passport.initialize());
passport.use('jwt', strategies.jwt);

app.use('/api', api);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
