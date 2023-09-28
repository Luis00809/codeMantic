const sequelize = require('../config/connection');
const { User, Form } = require('../models');  // added review
const Review = require('../models/Review');

const userData = require('./userData.json');
const formData = require('./formData.json');
const reviewData = require('./reviewData.json'); // added reviewData json

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const form of formData) {
    await Form.create({
      ...form,
    });
  }

  // ADDED LOOP FOR REVIEW DATA
  for (const review of reviewData) {
      await Review.create({
        ...review,
    });
  }

  process.exit(0);
};

seedDatabase();



  
  


  
 
   




