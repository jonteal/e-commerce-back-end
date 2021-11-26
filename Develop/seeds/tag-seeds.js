// Tag variable that requests the Tag model
const { Tag } = require('../models');

// Seed Tag data
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Function that creates all Tags at once
const seedTags = () => Tag.bulkCreate(tagData);

// Exporting the seeded tags
module.exports = seedTags;
