const sequelize = require('../config/connection');    // Import Sequelize Instance
const { User, Form } = require('../models');          // Import User and Form Models
const Review = require('../models/Review');           // Import Review Model

const userData = require('./userData.json');          // Import user data from JSON file
const formData = require('./formData.json');          // Import form data from JSON file
const reviewData = require('./reviewData.json');      // Import review data from JSON file

const seedDatabase = async () => {                    // Define function/seed database
  await sequelize.sync({ force: true });              // Syncs Sequelize with database/forces table creation

  const users = await User.bulkCreate(userData, {     // Creating multiple user records
    individualHooks: true,                            // Enable individual hooks
    returning: true,                                  // Return created records
  });

  for (const form of formData) {                      // Loop through form data/create Form records
    await Form.create({

      ...form,
    });
  }

  // LOOP FOR REVIEW DATA 
  for (const review of reviewData) {
      await Review.create({
        ...review,    // spread review data
    });
  }

  process.exit(0);    // Exit process
};

seedDatabase();   // Calling seedDatabase function to start seeding data





