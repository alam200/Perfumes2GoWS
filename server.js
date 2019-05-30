const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const api = require('./server/routes/api');
const error = require('./server/middlewares/error');
const passport = require('passport');
const strategies = require('./server/config/passport');
const cors = require('cors');
const helmet = require('helmet')

const port = 3000;

const app = express();
const router = express.Router();

const DIR = './src/assets/upload_image';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + path.basename(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.post('/api/upload',upload.single('product'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});

app.get('/api', function (req, res) {
    res.end('file catcher example');
  });

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



const PORT = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
