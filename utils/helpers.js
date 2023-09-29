// DISPLAY YEAR, DAY, AND MONTH IN FOOTER

const Handlebars = require('handlebars');               // IMPORT HANDLEBARS
Handlebars.registerHelper('currentYear', () => {        // REGISTER HANDLEBARS HELPER
  const year = new Date().getFullYear();                // GET CURRENT YEAR

  console.log('Current Year:', year);                   // Log 'year' variable to the console

  return year;         // Return 'year' variable as a result

});

// Register a Handlebars helper named 'currentDate'
Handlebars.registerHelper('currentDate', () => {

        return new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
         // Return current date in a specific format
      });



module.exports = Handlebars;    // export handlebars object with the 'currentDate' helper