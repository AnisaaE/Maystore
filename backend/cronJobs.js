const cron = require('node-cron');
const { deleteExpiredUsers } = require('./controllers/cleanupController');

// Schedule the cleanup function to run every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running cleanup task to delete expired unverified users...');
  deleteExpiredUsers();
});

module.exports = cron;
