const withAuth = (req, res, next) => {
  // Check if user is not logged in
  if (!req.session.logged_in) {
    // Redirect to login route
    res.redirect('/login');
  } else {
    
    next();
  }
};

module.exports = withAuth; // Export 
