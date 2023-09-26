const router = require('express').Router();
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

// doesn't work in insomnia

router.get('/', async (req, res) => {
  try {

    const reviewData = await Review.findAll();
    res.json(reviewData);

  } catch (err) {
    res.sendStatus(500).send(err);
    console.log(err);
  }
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newReview);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateReview = await Review.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json(updateReview);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

module.exports = router;