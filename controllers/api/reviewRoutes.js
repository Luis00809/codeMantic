// Import necessary modules/packages
const router = require('express').Router();
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

// Define a route to get all reviews
router.get('/', async (req, res) => {
  try {
    // Fetch all review data
    const reviewData = await Review.findAll();
    // Send JSON response with review data
    res.json(reviewData);
  } catch (err) {
    // Handle errors and send a 500 status code
    res.status(500).send(err);
    console.log(err);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const reviewData = await Review.findByPk();
//     // Send JSON response with review data
//     res.json(reviewData);
//   } catch (err) {
//     // Handle errors and send a 500 status code
//     res.status(500).send(err);
//     console.log(err);
//   }
// });

// Define a route to create a new review (requires authentication)
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new review with user ID from session
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // Send JSON response with new review data
    res.status(200).json(newReview);
  } catch (err) {
    // Handle errors and send a 500 status code
    res.status(500).send(err);
  }
});

// Define a route to update a review by ID (requires authentication)
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Update a review by ID
    const updateReview = await Review.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    // Send JSON response with updated review data
    res.status(200).json(updateReview);
  } catch (err) {
    console.log(err);
    // Handle errors and send a 500 status code
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;