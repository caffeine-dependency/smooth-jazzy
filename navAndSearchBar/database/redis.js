const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', (err) => {
  if (err) {
    console.log('Error connecting to redis', err.stack)
  } else {
    console.log('connected to redis');
  }
})

module.exports = redisClient;