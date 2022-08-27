const db = require('../config/connection');
const { Contact } = require('../models');
const contactSeeds = require('./contactSeeds.json');

db.once('open', async () => {
    try {
      await Contact.deleteMany({});
  
      await Contact.create(contactSeeds);
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });