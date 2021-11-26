// Category variable that requires the Category model 
const { Category } = require('../models');

// Seed Category names
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function that creates all Categories at once
const seedCategories = () => Category.bulkCreate(categoryData);

// Exporting the seeded Categories
module.exports = seedCategories;