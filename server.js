const path = require('path');
require('dotenv').config(); // added require dotenv
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const homeRoutes = require('./controllers/homeRoutes'); // HOME ROUTES ADDED 

// SETS UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3027;

// HELPERS
const hbs = exphbs.create({ helpers });

// SESSION CONFIG
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// HANDLEBARS
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// MIDDLEWARE SETUP
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// app.use('/', homeRoutes); 
app.use('/', routes);



// VIEW HANDLEBAR TEMPLATES
// HOMEPAGE
app.get('/', (req, res) => {
  res.render('homepage');   // RENDER HOMEPAGE 
});

// ABOUT PAGE
app.get('/about', (req, res) => {
  res.render('about');      // RENDER ABOUT PAGE 
});

// USERS PROFILE
app.get('/userProfile', (req, res) => {
  res.render('userProfile');
});

// SUBMIT REVIEWS
app.get('/submitReviews', (req, res) => {
  res.render('submitReviews');
});

// SEARCH
app.get('/search', (req, res) => {
  res.render('search');
});



// EDIT PROFILE
app.get('/editProfile', (req, res) => {
  res.render('editProfile');
});



// START SERVER
// CHANGES MADE: BACKTICKS ADDED AND VALUE OF PORT
// BUT if we want to revert back to "", i think we can do: "Server running http://localhost:" + PORT
// just tested and that works to so its whatever we want to do with it
// or `Server running http://localhost:${PORT}`

// LIST OF HTTP STATUS CODES
const statusCodes = [
  { code: '100', name: '100 Continue' },
  { code: '101', name: '101 Switching Protocols' },
  { code: '103', name: '103 Early Hints' },
  { code: '200', name: '200 OK' },
  { code: '201', name: '201 Created' },
  { code: '202', name: '202 Accepted' },
  { code: '204', name: '204 No Content' },
  { code: '208', name: '208 Already Reported' },
  { code: '226', name: '226 IM Used' },
  { code: '301', name: '301 Moved Permanently' },
  { code: '303', name: '303 See Other' },
  { code: '400', name: '400 Bad Request' },
  { code: '401', name: '401 Unauthorized' },
  { code: '402', name: '402 Payment Required' },
  { code: '403', name: '403 Forbidden' },
  { code: '404', name: '404 Not Found' },
  { code: '405', name: '405 Method Not Allowed' },
  { code: '406', name: '406 Not Acceptable' },
  { code: '409', name: '409 Conflict' },
  { code: '410', name: '410 Gone' },
  { code: '411', name: '411 Length Required' },
  { code: '416', name: '416 Range Not Satisfiable' },
  { code: '417', name: '417 Expectation Failed' },
  { code: '425', name: '425 Too Early' },
  { code: '429', name: '429 Too Many Requests' },
  { code: '451', name: '451 Unavailable For Legal Reasons' },
  { code: '500', name: '500 Internal Server Error' },
  { code: '501', name: '501 Not Implemented' },
  { code: '502', name: '502 Bad Gateway' },
  { code: '503', name: '503 Service Unavailable' },
  { code: '504', name: '504 Gateway Timeout' },

];

// LOAD REVIEW PAGE WITH STATUS CODE BADGES
app.get('/review', (req, res) => {
  res.render('Review', { statusCodes }); 
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server running http://localhost:" + PORT));
});