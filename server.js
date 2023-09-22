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
app.use('/', homeRoutes); 
app.use('/api', routes);

app.get('/', (req, res) => {
  res.render('homepage'); 
});

app.get('/about', (req, res) => {
  res.render('about'); 
});

// START SERVER
// CHANGES MADE: BACKTICKS ADDED AND VALUE OF PORT
// BUT if we want to revert back to "", i think we can do: "Server running http://localhost:" + PORT
// just tested and that works to so its whatever we want to do with it
// or `Server running http://localhost:${PORT}`

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server running http://localhost:" + PORT));
});